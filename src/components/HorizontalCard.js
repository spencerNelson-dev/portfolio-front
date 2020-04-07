import React, { useContext } from 'react';
import { ProjectsContext } from './ProjectsContext'
import { Link as RLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import consts from '../consts'

const HorizontalCard = (props) => {

    const { texts } = useContext(ProjectsContext)

    const getText = (location) => {

        let rtnValue = ''

        for (let element of texts) {
            if (element.location === location) {
                rtnValue = element.text
            }
        }

        return rtnValue
    }



    return (
        <div>
            <div>
                <Grid container spacing={5} justify='center'>

                    <Grid item xs={10}>
                        <Card raised={true}>
                            <CardContent>

                                <CardMedia
                                    component="img"
                                    alt="Hot air balloons"
                                    height="140"
                                    image={`${consts.uriBase}/public/images/about.jpg`}
                                    title="Who is Spencer Nelson"
                                />

                                {/* Card Title */}
                                <Typography gutterBottom variant="h5" component="h2">
                                    Spencer Nelson
                                </Typography>

                                {/* Card description text */}
                                <Typography variant="body2" color="textPrimary" component="p">
                                    {getText('MainPage-Introduction')}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" component={RLink}
                                    to='/about'>
                                    More About Me
                                     </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </div>

        </div>
    );
};

export default HorizontalCard;