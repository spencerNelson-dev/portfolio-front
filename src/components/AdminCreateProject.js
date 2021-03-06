import React, { useState, useContext } from 'react';
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
}));

function AdminCreateProject(props) {
    const classes = useStyles()

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [liveLink, setLiveLink] = useState('')
    const [gitHubLinks, setGitHubLinks] = useState('')
    const [imgSrc, setImgSrc] = useState('')

    const { images, projects, setProjects } = useContext(ProjectsContext)
    const { token } = useContext(LoginContext)

    const clearInputs = () => {
        setTitle('')
        setText('')
        setLiveLink('')
        setGitHubLinks('')
        setImgSrc('')
    }

    const onCreate = (event) => {

        event.preventDefault()

        let newProject = {
            title,
            text,
            liveLink,
            gitHubLinks,
            imgSrc
        }

        fetch(`${consts.uriBase}${consts.projectsRoute}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newProject)
        })
            .then(httpResonse => {
                if (!httpResonse.ok) {
                    throw new Error("Could not get projects")
                }

                return httpResonse.json()
            })
            .then(result => {

                console.log(result)

                if (result.message === undefined) {
                    // update projects array
                    let newList = [...projects]

                    newList.push(result)

                    setProjects(newList)

                    //Clear the inputs
                    clearInputs()
                } else {
                    alert(result.message)
                }

            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <div >
            <Paper elevation={3} style={{ padding: 16 }}>
                <h3>Create Project</h3>
                <div className={classes.root}>
                    <TextField required
                        label="Title"
                        id='createTitle'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <br />
                    <TextField required
                        multiline
                        label="Text"
                        id='createText'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <br />
                    <TextField label="Live Link"
                        id='createLiveLink'
                        value={liveLink}
                        onChange={(event) => setLiveLink(event.target.value)}
                    />
                    <br />
                    <TextField label="GitHub Links"
                        id='createGitHubLinks'
                        multiline value={gitHubLinks}
                        onChange={(event) => setGitHubLinks(event.target.value)}
                        helperText="multiple links seperated with commas"
                    />
                    <br /><br />
                    <TextField select
                        id='createImgSelect'
                        value={imgSrc}
                        onChange={(event, child) => { setImgSrc(child.key) }}
                        helperText="Please select an image"
                    >
                        {
                            images.map((img) => (
                                <MenuItem key={img} value={img}>
                                    {img}
                                </MenuItem>
                            ))
                        }

                    </TextField>

                </div>
                <br />
                <Button variant='contained'
                    id='createButton'
                    color='primary'
                    onClick={onCreate}>Create!</Button>
            </Paper>
        </div>
    );
}

export default AdminCreateProject;