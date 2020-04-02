import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper'
import consts from '../consts'

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

                            <Button size="small" color="primary">
                                Live Site
                            </Button>

                        ) : (
                                null
                            )
                    }

                    {/* GitHub button */}
                    <Button size="small" color="primary">
                        GitHub
                    </Button>

                </CardActions>
            </Card>


        </React.Fragment>
    );
}

export default ProjectCard;