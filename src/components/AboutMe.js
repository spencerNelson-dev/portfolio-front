import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import consts from '../consts'

function AboutMe(props) {
  return (
    <div>

      <Grid container>
        <Grid item xs={12} style={{ margin: 32 }}>

          <Paper elevation={6}>
            <Card >
              <CardMedia
                component="img"
                alt="Hot air balloons"
                height="140"
                image={`${consts.uriBase}/public/images/about.jpg`}
                title="Who is Spencer Nelson"
              />
              <CardContent>

                <Typography gutterBottom variant="h5" component="h2">
                  Introduction
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  Coming soon
               </Typography>

                <Typography gutterBottom variant="h5" component="h2">
                  Mission
                </Typography>

              </CardContent>
            </Card>
          </Paper>

        </Grid>
      </Grid>

    </div>
  );
}

export default AboutMe;