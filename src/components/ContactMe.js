import React, { useContext, useState } from 'react';
import { ProjectsContext } from './ProjectsContext'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import consts from '../consts'

function ContactMe(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const { texts } = useContext(ProjectsContext)

    const getText = (location) => {

        let rtnValue = ''

        for (let element of texts) {
            if (element.location === location) {
                rtnValue = element.text
            }
        }

        return rtnValue
    }

    const clearState = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const onClickSendMessage = () => {

        //verify that an email name and message have been entered
        if (name === '' || email === '' || message === '') {
            alert("Please fill out name, email and message")
        }

        //verify that the email is valid
        const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        if (email.match(emailRegEx) === null) {
            alert("Please enter a valid email")
        }

        // get the current date
        let currentDate = new Date()

        // create our object to send to our backend
        let sendMessage = {
            name,
            email,
            message,
            date: currentDate,
            app: "Portfolio"
        }

        fetch(`${consts.uriBase}${consts.messagesRoute}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendMessage)
        })
        .then(httpResult => {
            if(!httpResult.ok){
                alert("Message failed to send")
            }

            return httpResult.json()
        })
        .then(message => {

            alert("Message sent!")

            // clear state
            clearState()
        })


        console.log(sendMessage)
    }

    return (
        <div>
            <Paper elevation={3} style={{ padding: 16, margin: 16 }}>
                {getText('ContactMe')}
            </Paper>

            <Paper elevation={3} style={{ padding: 16, margin: 16 }}>
                <div>
                    <TextField required
                        label="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br />
                    <TextField required
                        label="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br />
                    <TextField required
                        multiline
                        label="Message"
                        fullWidth
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
                <br />
                <Button variant='contained'
                    color='primary'
                    onClick={onClickSendMessage}
                >
                    Send Message
                </Button>

                <Button variant='contained'
                    color='secondary'
                    style={{ float: 'right' }}
                    onClick={clearState}
                >
                    Clear
                </Button>

            </Paper>
            <br /><br />
        </div>
    );
}

export default ContactMe;