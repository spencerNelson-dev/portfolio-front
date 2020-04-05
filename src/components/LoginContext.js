import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'


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

    useEffect(() => {

        let localToken = window.localStorage.getItem('token')

        // if a token is in local storage
        if (localToken) {

            // decode the token
            let payload = jwt.decode(localToken)

            // Check if the token is expired
            if (Date.now().valueOf() / 1000 >= payload.exp) {

                // alert
                alert("You have been logged out due to inactivity.")
                setLoggedIn(false)
            } else {
                // the token is not expired
                setToken(localToken)
                setLoggedIn(true)
            }

        }// end of if
    }, [])

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, token, writeToken }}>
            {props.children}
        </LoginContext.Provider>
    )
}

const LoginConsumer = LoginContext.Consumer
export { LoginProvider, LoginConsumer, LoginContext }

