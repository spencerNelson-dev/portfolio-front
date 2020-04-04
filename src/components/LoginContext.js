import React, { useState, useEffect } from 'react'
import consts from '../consts'


const LoginContext = React.createContext()

const LoginProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(true)
    const [token, setToken] = useState('')

    // want to write to local storage.
    // so when the user refreshes we aren't logged out
    const writeToken = (token) => {

        window.localStorage.setItem("token", token)

        setToken(token)
    }

    const verifyToken = () => {

        let token = window.localStorage.getItem('token')

        console.log("verifyToken called")

        fetch(`${consts.uriBase}${consts.authRoute}/verifyToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        })
            .then(httpResult => {
                if (!httpResult.ok) {
                    throw new Error("Failed to validate token")
                }

                return httpResult.json()
            })
            .then(response => {
                console.log("response",response)
                setLoggedIn(response)
                setToken(token)
            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {

        //verifyToken()
    }, [])



    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, token, writeToken, verifyToken }}>
            {props.children}
        </LoginContext.Provider>
    )
}

const LoginConsumer = LoginContext.Consumer
export { LoginProvider, LoginConsumer, LoginContext }

