import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import consts from '../consts'
import { ProjectsContext } from './ProjectsContext';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem'
import { LoginContext } from './LoginContext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        float: "right"
    }
}));

function AdminEditProject(props) {
    const classes = useStyles()

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [liveLink, setLiveLink] = useState('')
    const [gitHubLinks, setGitHubLinks] = useState('')
    const [imgSrc, setImgSrc] = useState('')

    const [currentProject, setCurrentProject] = useState({})

    const { images, projects, setProjects } = useContext(ProjectsContext)
    const {token} = useContext(LoginContext)

    const clearInputs = () => {
        setId('')
        setTitle('')
        setText('')
        setLiveLink('')
        setGitHubLinks('')
        setImgSrc('')
        setCurrentProject({})
    }

    const onProjectSelect = (event, child) => {

        // get the project from the
        // array of projects
        // the component does not update state until
        // the function is done, so we cannot use
        // element._id === id. id would be ''
        // even after we selected an item
        for (let element of projects) {

            if (element._id === child.key) {

                // if found, set state
                // for our inputs
                setId(child.key)
                setTitle(element.title)
                setText(element.text)
                setLiveLink(element.liveLink)
                setGitHubLinks(element.gitHubLinks)
                setImgSrc(element.imgSrc)

                // set the currentProject state
                // this will be used when we click
                // the edit button
                setCurrentProject(element)
            }
        }
    }

    const onEdit = () => {

        //the id must be present to edit
        if (id === '') {
            alert("No project selected to edit.")
            clearInputs()
        } else {

            // build our updated projects
            // from our input fields
            let updatedProject = {
                _id: id,
                title,
                text,
                liveLink,
                // if gitHubLinks is an array, 
                // pass in the value, else,
                // remove spaces and newlines and
                // split
                gitHubLinks: Array.isArray(gitHubLinks) ? gitHubLinks : gitHubLinks.replace(/[\s\n]/g,'').split(','),
                imgSrc
            }

            // build an object that contains
            // only the properties that have
            // changed
            let changes = {}

            for (let property in currentProject){

                // we want to skip the __v property
                if(property === '__v') continue;

                // if the properties are different
                if(updatedProject[property] !== currentProject[property]){

                    // put the change into our changes obj
                    changes[property] = updatedProject[property]
                }
            }

            // send the changes to our PATCH api
            fetch(`${consts.uriBase}${consts.projectsRoute}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(changes)
            })
            .then(httpResult => {
                if(!httpResult.ok){
                    throw new Error("Failed to patch")
                }

                return httpResult.json()
            })
            .then(result => {

                // if a row was modified
                // update our project in the
                // project array
                if(result.nModified === 1){

                    let newList = [...projects]

                    // look for the changed project
                    for(let element of newList){
                        if(element._id === id){

                            // change the properties that are
                            // in the changes object
                            for(let property in changes){
                                element[property] = changes[property]
                            }
                        }
                    }
    
                    setProjects(newList)
    
                    //Clear the inputs
                    clearInputs()

                } else {
                    alert("Nothing changed")
                }
            })
            .catch(error => {
                console.log(error)
            })
            

        }// end of if
    }

    return (
        <div >
            <Paper elevation={3} style={{ padding: 16 }}>
                <h3>Edit Project</h3>
                <div className={classes.root}>
                    <TextField select
                        id='editProjectSelect'
                        value={id}
                        onChange={onProjectSelect}
                        helperText="Please select a project">
                        {
                            projects.map((project) => (
                                <MenuItem id={project.title.split(" ")[0]} key={project._id} value={project._id}>
                                    {project.title}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <br />
                    <TextField required
                        label="Title"
                        id="editTitle"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <br />
                    <TextField required
                        multiline
                        label="Text"
                        id="editText"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <br />
                    <TextField label="Live Link"
                        id="editLiveLink"
                        value={liveLink}
                        onChange={(event) => setLiveLink(event.target.value)}
                    />
                    <br />
                    <TextField label="GitHub Links"
                        id="editGitHubLinks"
                        multiline value={gitHubLinks}
                        onChange={(event) => setGitHubLinks(event.target.value)}
                        helperText="multiple links seperated with commas"
                    />
                    <br /><br />
                    <TextField select
                        id='editImageSelect'
                        value={imgSrc}
                        onChange={(event, child) => { setImgSrc(child.key) }}
                        helperText="Please select an image"
                    >
                        {
                            images.map((img) => (
                                <MenuItem id={img} key={img} value={img}>
                                    {img}
                                </MenuItem>
                            ))
                        }

                    </TextField>

                </div>
                <br />
                <Button variant='contained'
                    id='editButton'
                    color='primary'
                    onClick={onEdit}
                >
                    Edit!
                    </Button>

                <Button className={classes.button} variant='contained'
                    color='secondary'
                    onClick={clearInputs}
                >
                    Clear
                    </Button>


            </Paper>
        </div>
    );
}

export default AdminEditProject;