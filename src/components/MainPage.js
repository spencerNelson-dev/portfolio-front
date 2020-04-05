import React, { useContext } from 'react'
import HorizontalCard from './HorizontalCard'
import ProjectCard from './ProjectCard'
import { Link as RLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { ProjectsContext } from './ProjectsContext'

//function to get only three projects
function getThreeProjects(projects, setProjects) {

    let rtnArr = []

    for (let index = 0; index < projects.length && index < 3; index++) {
        rtnArr.push(projects[index])
    }

    return rtnArr
}

export default function MainPage(props) {

    const { projects, setProjects } = useContext(ProjectsContext)

    return (
        <div>
            {/* <!-- Section with horizontal card --> */}
            <HorizontalCard></HorizontalCard>

            {/* <!-- Section with project pictures and info --> */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3} alignItems='stretch' >
                        {
                            getThreeProjects(projects).map(project => {
                                return (
                                    <Grid key={project._id} item
                                        component={() => <ProjectCard key={project._id}
                                            card={project}
                                            projects={projects}
                                            setProjects={setProjects} />} >
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

            <br /><br />
            {/* <!-- Section with our Portfolio Button --> */}
            <div style={{ textAlign: 'center' }}>
                <Button variant="contained"
                    color="secondary"
                    component={RLink}
                    to='/portfolio'>
                    View All Projects
                </Button>
            </div>

        </div>
    )
}