import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {LoginConsumer} from './LoginContext'

export default function ProtectedRoute ({component: Component, ...rest}) {

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