import React, {useState} from 'react'

const LoginContext = React.createContext({})

const LoginProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(true)
    const [token, setToken] = useState('')

    // want to write to local storage.
    // so when the user refreshes we aren't logged out
    const writeToken = (token) => {

        setToken(token)
    }

    return (
        <LoginContext.Provider value ={{loggedIn, setLoggedIn, token, writeToken}}>
            {props.children}
        </LoginContext.Provider>
    )
}

const LoginConsumer = LoginContext.Consumer
export {LoginProvider, LoginConsumer, LoginContext}

