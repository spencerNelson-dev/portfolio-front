import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import consts from '../consts'
import Paper from '@material-ui/core/Paper';
import { LoginContext } from './LoginContext';

function AdminMessages(props) {

    const [showMessages, setShowMessages] = useState(false)
    const [messages, setMessages] = useState([])

    const { token } = useContext(LoginContext)


    const onClickShowMessages = () => {

        fetch(`${consts.uriBase}${consts.messagesRoute}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then(httpResult => {
                if (!httpResult.ok) {
                    throw new Error("Could not get messages")
                }

                return httpResult.json()
            })
            .then(result => {

                // if no error message
                if (result.message === undefined) {
                    console.log(result)
                    setMessages(result)
                    setShowMessages(true)
                } else {
                    // alert the error message
                    alert(result.message)
                }

            })
            .catch(error => {
                console.log(error)
            })

    }

    const onClickDelete = async (event) => {

        let id = event.target.id

        fetch(`${consts.uriBase}${consts.messagesRoute}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

        })
            .then(httpResult => {
                if (!httpResult.ok) {
                    throw new Error("Could not delete message.")
                }

                return httpResult.json()
            })
            .then(result => {

                if (result.deletedCount === 1) {

                    // update our messages array
                    let newList = [...messages]

                    let index

                    // find the indexOf the deleted message
                    for (let message of newList) {

                        if (message._id === id) {
                            index = newList.indexOf(message)
                        }
                    }

                    //remove it from the projects array
                    newList.splice(index, 1)

                    //set the state
                    setMessages(newList)
                }
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div>
            <Paper elevation={3} style={{ padding: 16 }}>
                <div>
                    <h2>Messages</h2>
                </div>
                <div>
                    {
                        showMessages ? (
                            <div>
                                <ul>
                                    {
                                        messages.map((value) => {
                                            return (
                                                <li key={value._id}>
                                                    {`${new Date(value.date).toLocaleDateString()}||${value.email}||${value.name}||${value.message}||${value.app}`}
                                                    <button id={value._id} onClick={onClickDelete}>DELETE</button>
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