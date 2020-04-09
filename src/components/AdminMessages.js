import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import consts from '../consts'
import Paper from '@material-ui/core/Paper';
import { LoginContext } from './LoginContext';

function AdminMessages(props) {

    const [showMessages, setShowMessages] = useState(false)
    const [messages, setMessages] = useState([])

    const {token} = useContext(LoginContext)


    const onClickShowMessages = () => {

        fetch(`${consts.uriBase}${consts.messagesRoute}`,{
            method:"GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then(httpResult => {
            if(!httpResult.ok){
                throw new Error("Could not get messages")
            }

            return httpResult.json()
        })
        .then(result => {
            console.log(result)
            setMessages(result)
            setShowMessages(true)
        })
        .catch(error => {
            console.log(error)
        })

    }

    const onClickDelete = () => {
        //TODO
        //Add ability to delete messages
    }

    return (
        <div>
            <Paper elevation={3} style={{padding: 16}}>
                <div>
                    <h2>Messages</h2>
                </div>
                <div>
                    {
                        showMessages ? (
                            <div>
                                <ul>
                                {
                                    messages.map((value) =>{
                                        return(
                                        <li key={value._id}>
                                            {`${new Date(value.date).toLocaleDateString()}||${value.email}||${value.name}||${value.message}||${value.app}`}
                                            <button onClick={onClickDelete}>DELETE</button>
                                        </li>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        ) : (
                            null
                        )
                    }

                </div>
                <div>
                    <Button onClick={onClickShowMessages} variant='contained' color='primary'>Show Messages</Button>
                </div>
            </Paper>
        </div>
    );
}

export default AdminMessages;