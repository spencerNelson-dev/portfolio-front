import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './MainPage'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { LoginProvider } from './LoginContext';
import Footer from './Footer';
import Header from './Header';
// import {AuthProvider} from './AuthContext'
// import ProtectedRoute from './ProtectedRoute'

function MainRouter(props) {
    return (
        <div>
            <Router>

                <LoginProvider>
                    <Header></Header>
                    <Switch>
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/about' component={AboutMe} />
                        <Route path='/contact' component={ContactMe} />
                        <Route path='/' component={MainPage} />
                    </Switch>
                    <Footer></Footer>
                </LoginProvider>
            </Router>

        </div>
    );
}

export default MainRouter;