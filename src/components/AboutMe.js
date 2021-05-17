import React, { useContext, useState } from 'react';
import { ProjectsContext } from './ProjectsContext'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import consts from '../consts'

function AboutMe(props) {

  const { texts } = useContext(ProjectsContext)

  const [textArray, setTextArray] = useState([])
  const [textArray2, setTextArray2] = useState([])

  const getText = (location, setState) => {

    if (texts.length > 0 && textArray.length === 0) {

      let rtnValue = ''

      for (let element of texts) {
        if (element.location === location) {
          rtnValue = element.text
        }
      }

      let newTextArray = rtnValue.split("\n\n")

      if (newTextArray.length > 1) {
        setState(newTextArray)
      }

    }
  }

  getText('About-Introduction', setTextArray)
  getText('About-Mission', setTextArray2)

  return (
    <div>

      <Grid container>
        <Grid item xs={12} style={{ margin: '1% 15%' }}>

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

                {
                  textArray.map(value => {

                    return (
                      <Typography style={{ margin: 10 }} key={value} variant="body2" color="textPrimary" component="p">
                        {value}
                      </Typography>
                    )
                  })
                }

                <Typography gutterBottom variant="h5" component="h2">
                  Mission
                </Typography>

                {
                  textArray2.map(value => {

                    return (
                      <Typography style={{ margin: 10 }} key={value} variant="body2" color="textPrimary" component="p">
                        {value}
                      </Typography>
                    )
                  })
                }

               // <Typography gutterBottom variant="h5" component="h2">
               //   Resume
               // </Typography>
               // <a href={`${consts.uriBase}/resume`}>Resume</a>

              </CardContent>
            </Card>
          </Paper>

        </Grid>
      </Grid>

    </div>
  );
}

export default AboutMe;
