import React from 'react';

function Header(props) {
    return (

        <div className="mdl-layout__header site-header">
            <div className="mdl-layout__header-row site-navigation-row mdl-layout--large-screen-only">
                {/* <!-- Nav --> */}
                <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <a className="mdl-navigation__link" href="/">Home</a>
                    <a className="mdl-navigation__link" href="/portfolio">Portfolio</a>
                    <a className="mdl-navigation__link" href="/about">About</a>
                    <a className="mdl-navigation__link" href="/contact">Contact</a>
                </nav>
            </div>
        </div>

    );
}

export default Header;