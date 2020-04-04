import React from 'react';
import AdminCreateProject from './AdminCreateProject';
import Grid from '@material-ui/core/Grid'
import UploadFile from './UploadFile';
import AdminEditProject from './AdminEditProject';


function AdminPage(props) {




    return (
        <div>
            <Grid container direction="column"
             spacing={3} 
             justify='space-evenly'
             alignItems='center' >

                <Grid item xs={6}>
                    <UploadFile />
                </Grid>

                <Grid item>

                    <Grid container spacing={3} justify='space-evenly'>

                        <Grid item>
                            <AdminCreateProject />
                        </Grid>

                        <Grid item>
                            <AdminEditProject />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </div>
    );
}

export default AdminPage;