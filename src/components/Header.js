import React from 'react';
import { Link as RLink } from 'react-router-dom'

function Header(props) {
    return (
        <div id="top" className=" mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">

                <div className="mdl-layout__header-row site-navigation-row">

                    <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                        <RLink className="mdl-navigation__link" to="/">Home</RLink>
                        <RLink className="mdl-navigation__link" to="/portfolio">Portfolio</RLink>
                        <RLink className="mdl-navigation__link" to="/about">About</RLink>
                        <RLink className="mdl-navigation__link" to="/contact">Contact</RLink>
                    </nav>

                </div>
            </header>
        </div>

    );
}

export default Header;