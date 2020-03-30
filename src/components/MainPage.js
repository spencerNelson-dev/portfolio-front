import React from 'react'
import '../main.css'
import HorizontalCard from './HorizontalCard'
import ProjectCard from './ProjectCard'
import Header from './Header'
import {Link as RLink} from 'react-router-dom'

//import our projects
import projects from './projects'

//function to get only two projects
function getThreeProjects(projects) {

    let rtnArr = []

    for (let index = 0; index < projects.length && index < 3; index++){
        rtnArr.push(projects[index])
    }

    console.log(rtnArr)

    return rtnArr
}

export default function MainPage(props) {

    return (
        <div className='main'>

            <div id="top">
                <div className=" mdl-layout mdl-js-layout mdl-layout--fixed-header">

                    {/* START OF HEADER */}
                    <Header></Header>

                    {/* START OF MAIN */}
                    <main className="mdl-layout__content">
                        <div className="site-content">

                            {/* <!-- Section with horizontal card --> */}
                            <HorizontalCard></HorizontalCard>

                            {/* <!-- Section with project pictures and info --> */}
                            <section className="section--center mdl-grid site-max-width">

                                {
                                    getThreeProjects(projects).map(project => {
                                        return (
                                            <ProjectCard key={project._id} card={project}></ProjectCard>
                                        )
                                    })
                                }

                            </section>

                            {/* <!-- Section with our Portfolio Button --> */}
                            <section className="section--center mdl-grid site-max-width homepage-portfolio">
                                <RLink className="mdl-button mdl-button--raised mdl-js-button mdl-js-ripple-effect mdl-button--accent"
                                    to="/portfolio">View All Projects</RLink>
                            </section>

                        </div>

                    </main>

                </div>
            </div>
        </div>
    )
}