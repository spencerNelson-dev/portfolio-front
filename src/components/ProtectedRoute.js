import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {LoginConsumer, LoginContext} from './LoginContext'


export default function ProtectedRoute ({component: Component, ...rest}) {

    const {loggedIn} = useContext(LoginContext)

    return (
        <LoginConsumer>
            {
                ({loggedIn}) => (

                    <Route
                        render ={props => 

                            loggedIn ? <Component {...props} /> : <Redirect to='/login'/>
                        }
                        {...rest}
                    />
                )
            }
        </LoginConsumer>
    )

}