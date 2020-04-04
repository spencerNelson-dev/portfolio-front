import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './MainPage'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { LoginProvider } from './LoginContext';
import { ProjectsProvider } from './ProjectsContext'
import Footer from './Footer';
import Header from './Header';
import Login from './Login'
import AdminPage from './AdminPage'
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from './ScrollToTop';
import VerifyToken from './VerifyToken'

function MainRouter(props) {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <LoginProvider>
                    <ProjectsProvider>
                    <VerifyToken />
                    <Header></Header>
                    <Switch>
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/about' component={AboutMe} />
                        <Route path='/contact' component={ContactMe} />
                        <Route path='/login' component={Login} />
                        <ProtectedRoute path="/admin" component={AdminPage} />
                        <Route path='/' component={MainPage} />
                    </Switch>
                    <Footer></Footer>
                    </ProjectsProvider>
                </LoginProvider>
            </Router>

        </div>
    );
}

export default MainRouter;