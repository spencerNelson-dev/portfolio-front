import React, { useState, useContext } from 'react';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core';
import consts from '../consts'
import { LoginContext } from './LoginContext';

function UploadFile(props) {

    const [file, setFile] = useState('')

    const {token} = useContext(LoginContext)


    const onUploadHandler = (event) => {

        event.preventDefault()

        const data = new FormData()

        data.append('file', file)
        data.append('filename', file.name)

        fetch(`${consts.uriBase}${consts.projectsRoute}/img/upload`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: data
        })
            .then(httpResponse => {
                if (!httpResponse.ok) {
                    throw new Error("Failed to upload file")
                }

                return httpResponse.json()
            })
            .then(response => {
                alert(response)
                setFile('')
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <div>
            <Paper elevation={3}>
                <div style={{margin: 30}}>
                    <h3>Upload Image</h3>

                    <form onSubmit={onUploadHandler}>
                        <Input type='file'
                            onChange={(event) => setFile(event.target.files[0])}
                            inputProps={{ 'aria-label': 'description' }}
                        />
                        <Button type='submit'>Upload</Button>
                    </form>
                </div>
            </Paper>
        </div>
    );
}

export default UploadFile;