import React from 'react';
import {Link as RLink} from 'react-router-dom'

const HorizontalCard = (props) => {
    return (

        <section className="section--center mdl-grid site-max-width">
            <header
                className="mdl-card mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white  mdl-shadow--4dp">
            </header>
            <div
                className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone  mdl-shadow--4dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Spencer Nelson</h2>
                </div>
                {/* <!-- Card supporting text --> */}
                <div className="mdl-card__supporting-text">
                    I am a software developer in the Salt Lake area.
                    My focus is currently on React.js, express.js, MongoDB, and Node.js.
                    I also have experience working with python and prostgres. Please look
                    at my projects and see the cool things I've created. Thanks!
                    </div>
                {/* <!-- Card Action --> */}
                <div className="mdl-card__actions  mdl-card--border">
                    <RLink to="/about" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">More About
                Me</RLink>
                </div>
            </div>
        </section>

    );
};

export default HorizontalCard;