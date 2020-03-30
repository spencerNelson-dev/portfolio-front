import React from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard'
import projects from './projects'

function Portfolio(props) {
    return (
        <div>
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

            <main className="mdl-layout__content">
                <div className="site-content">
                <div class="container"><div class="mdl-grid site-max-width">
                    {/* <!-- Section with project pictures and info --> */}
                    <section className="section--center mdl-grid site-max-width">

                        {
                            projects.reverse().map(project => {
                                return (
                                    <ProjectCard key={project._id} card={project}></ProjectCard>
                                )
                            })
                        }

                    </section>
                    {/* <!-- END OF Section with project pictures and info --> */}
                </div>
                </div></div>
            </main>
            </div>
        </div>
    );
}

export default Portfolio;