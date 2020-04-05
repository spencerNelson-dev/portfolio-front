import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper'
import consts from '../consts'
import {LoginContext} from './LoginContext'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,
        margin: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        height: 140,
    },
});

function ProjectCard(props) {
    const classes = useStyles();

    const {loggedIn, token} = useContext(LoginContext)
    const [id] = useState(props.card._id)

    const onClickDelete = () => {

        fetch(`${consts.uriBase}${consts.projectsRoute}/${props.card._id}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then(httpResponse => {
            if(!httpResponse.ok){

                throw new Error("Could not delete object")
            }

            return httpResponse.json()
        })
        .then(result => {

            // if the result comes back with a deleted count of 1
            // update the state of the projects array
            if(result.deletedCount === 1){

                // update our projects array
                let newList = [...props.projects]

                let index

                // find the indexOf the deleted project
                for (let project of newList){

                    if(project._id === id){
                        index = newList.indexOf(project)
                    }
                }

                //remove it from the projects array
                newList.splice(index, 1)

                //set the state
                props.setProjects(newList)
            }
            else {
                alert("Not Authorized")
            }
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <React.Fragment>
            {/* classes.root */}
            <Card className={classes.root} raised={true}> 

                {/* Card picture */}
                <CardMedia
                    className={classes.media}
                    image={`${consts.uriBase}/public/images/${props.card.imgSrc}`}
                    title="Contemplative Reptile"
                />
                <CardContent>

                    {/* Card Title */}
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.card.title}
                    </Typography>

                    {/* Card description text */}
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.card.text}
                    </Typography>

                </CardContent>


                <CardActions>

                    {/* Live Site button */}
                    {
                        props.card.liveLink !== "" ? (

                            <Button href={props.card.liveLink} size="small" color="primary">
                                Live Site
                            </Button>

                        ) : (
                                null
                            )
                    }

                    {/* GitHub button */}
                    {
                        props.card.gitHubLinks !== [] ? (
                            props.card.gitHubLinks.map((value, index)=> {
                                return(
                                    <Button key={value} href={value} color="primary">{`GitHub ${index + 1}`}</Button>
                                )
                            })
                        ):(
                            null
                        )
                    }
                    {/* Delete Button (only if logged in) */}
                    {
                        loggedIn ? (
                            <Button onClick={onClickDelete} color='secondary'>Delete</Button>
                        ):(
                            null
                        )
                    }

                </CardActions>
            </Card>


        </React.Fragment>
    );
}

export default ProjectCard;