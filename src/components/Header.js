import React from 'react';
import {Link as RLink} from 'react-router-dom'

function Header(props) {
    return (

        <div className="mdl-layout__header site-header">
            <div className="mdl-layout__header-row site-navigation-row mdl-layout--large-screen-only">
                {/* <!-- Nav --> */}
                <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <RLink className="mdl-navigation__link" to="/">Home</RLink>
                    <RLink className="mdl-navigation__link" to="/portfolio">Portfolio</RLink>
                    <RLink className="mdl-navigation__link" to="/about">About</RLink>
                    <RLink className="mdl-navigation__link" to="/contact">Contact</RLink>
                </nav>
            </div>
        </div>

    );
}

export default Header;