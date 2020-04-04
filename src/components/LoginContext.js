import React, { useState, useEffect } from 'react'
import consts from '../consts'


const LoginContext = React.createContext()

const LoginProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState('')

    // want to write to local storage.
    // so when the user refreshes we aren't logged out
    const writeToken = (token) => {

        window.localStorage.setItem("token", token)

        setToken(token)
        setLoggedIn(true)
    }

    useEffect( () => {
        console.log("auth context useffect")

        window.localStorage.getItem(token)

        if(token){
            loggedIn(true)
        }
    }, [])

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, token, writeToken}}>
            {props.children}
        </LoginContext.Provider>
    )
}

const LoginConsumer = LoginContext.Consumer
export { LoginProvider, LoginConsumer, LoginContext }

