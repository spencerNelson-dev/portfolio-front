import React from 'react';
import { Link as RLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const HorizontalCard = (props) => {
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
                                    image="http://localhost:3001/public/images/about.jpg"
                                    title="Who is Spencer Nelson"
                                />

                                {/* Card Title */}
                                <Typography gutterBottom variant="h5" component="h2">
                                    Spencer Nelson
                                </Typography>

                                {/* Card description text */}
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I am a software developer in the Salt Lake area.
                                    My focus is currently on React.js, express.js, MongoDB, and Node.js.
                                    I also have experience working with python and prostgres. Please look
                                    at my projects and see the cool things I've created. Thanks!
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href='/about'>
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