import React from 'react';
import {Link as RLink} from 'react-router-dom'

function Footer(props) {
    return (
        <div>
            <footer className="mdl-mini-footer">
                <div className="footer-container">
                    <div className="mdl-logo">
                        <RLink to="/login">&copy;</RLink> Spencer Nelson. Design: 
                        <a href="https://templateflip.com/"
                        target="_blank" rel="noopener noreferrer">TemplateFlip
                        </a>
                        </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;