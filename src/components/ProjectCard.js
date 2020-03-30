import React from 'react';

function ProjectCard(props) {

    return (
        <React.Fragment>
            <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                <div className="mdl-card__media">
                    <a href={props.card.liveLink}>
                        <img className="article-image" src={props.card.imgSrc} border="0" alt="" />
                    </a>
                </div>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{props.card.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {props.card.text}
            </div> <br />
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
                        href={props.card.liveLink}>
                        Live Site
              </a>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
                        href={props.card.gitHubLinks[0]}>
                        GitHub
              </a>
                </div>
            </div>

        </React.Fragment>
    );
}

export default ProjectCard;