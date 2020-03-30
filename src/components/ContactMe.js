import React from 'react';
import Header from './Header';

function ContactMe(props) {
    return (
        <div>
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header></Header>
                <main class="mdl-layout__content">
                    <div class="site-content">
                        <div class="mdl-grid site-max-width">
                            <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                                <div class="mdl-card__title">
                                    <h1 class="mdl-card__title-text">Contact</h1>
                                </div>
                                <div class="mdl-card__media">
                                </div>
                                <div class="mdl-grid site-copy">
                                    <div class="mdl-cell mdl-cell--12-col"><div class="mdl-card__supporting-text">
                                        <p>Contact me using the contact form below:</p>
                                        <form action="https://formspree.io/email@example.com" method="POST" class="form-contact">
                                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                <input class="mdl-textfield__input" pattern="[A-Z,a-z, ]*" type="text" id="Name" name="name" />
                                                <label class="mdl-textfield__label" for="Name">Name...</label>
                                                <span class="mdl-textfield__error">Letters and spaces only</span>
                                            </div>
                                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                <input class="mdl-textfield__input" type="text" id="Email" name="_replyto" />
                                                <label class="mdl-textfield__label" for="Email">Email...</label>
                                            </div>
                                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                <textarea class="mdl-textfield__input" type="text" rows="5" id="note" name="message"></textarea>
                                                <label class="mdl-textfield__label" for="note">Enter note</label>
                                            </div>
                                            <p>
                                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                                    Submit
          </button>
                                            </p>
                                        </form>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="mdl-mini-footer">
                        <div class="footer-container">
                            <div class="mdl-logo">&copy; Unitiled. Design: <a href="https://templateflip.com/" target="_blank">TemplateFlip</a></div>
                            <ul class="mdl-mini-footer__link-list">
                                <li><a href="#">Privacy & Terms</a></li>
                            </ul>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default ContactMe;