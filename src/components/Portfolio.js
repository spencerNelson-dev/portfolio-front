import React, {useContext } from 'react';
import ProjectCard from './ProjectCard'
import Grid from '@material-ui/core/Grid'
import {ProjectsContext} from './ProjectsContext'

function Portfolio(props) {

    const {projects, setProjects} = useContext(ProjectsContext)

    return (
        <div>
            <br /><br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        {
                            projects.map(project => {
                                return (
                                    <Grid key={project._id} item
                                        component={() => <ProjectCard key={project._id}
                                            card={project}
                                            setProjects={setProjects}
                                            projects={projects} />} >
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
            <br /><br />
        </div >
    );
}

export default Portfolio;