import React, { useState, useContext } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import ChooseText from './ChooseText';
import { ProjectsContext } from './ProjectsContext'
import {LoginContext} from './LoginContext'
import consts from '../consts'

function AdminEditTexts(props) {

    const [text, setText] = useState('')
    const [editTextId, setEditTextId] = useState('')

    const {token} = useContext(LoginContext)
    const { texts, setTexts } = useContext(ProjectsContext)

    const onClickSave = () => {

        fetch(`${consts.uriBase}${consts.textsRoute}/${editTextId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({text})
        })
        .then(httpResponse => {
            if(!httpResponse.ok){
                throw new Error("Failed to patch")
            }

            return httpResponse.json()
        })
        .then(result => {

                // if a row was modified
                // update our text in the
                // texts array
                if(result.nModified === 1){

                    let newList = [...texts]

                    // look for the changed project
                    for(let element of newList){
                        if(element._id === editTextId){


                            // change the text of the object to
                            // the current textin the text field
                            element.text = text
                        }
                    }
    
                    setTexts(newList)

                    alert("Changes Saved")

                } else {
                    alert("Nothing changed")
                }

        })

    }

    return (
        <div style={{ minWidth: 300 }}>
            <Paper elevation={3} style={{ padding: 16 }}>
                <h3>Edit Texts</h3>

                <ChooseText setEditText={setText} setEditTextId={setEditTextId} />
                <br />

                <TextField required
                    multiline
                    label="Text"
                    value={text}
                    fullWidth
                    onChange={(event) => setText(event.target.value)}
                />
                <br />
                <Button variant='contained' color='primary' onClick={onClickSave}>
                    Save
                        </Button>

            </Paper>
        </div>
    );
}

export default AdminEditTexts;