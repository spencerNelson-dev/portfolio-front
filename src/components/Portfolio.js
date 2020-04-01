import React from 'react';
import ProjectCard from './ProjectCard'
import projects from './projects'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function Portfolio(props) {

    return (
        <div>
            <br/><br/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        {
                            projects.reverse().map(project => {
                                return (
                                    <Grid key={project._id} item
                                        component ={() => <ProjectCard key={project._id} card={project} />} >
                                        </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
            <br/><br/>
        </div >
    );
}

export default Portfolio;