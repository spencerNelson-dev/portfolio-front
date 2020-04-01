import React from 'react';
import { Link as RLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CopyrightIcon from '@material-ui/icons/Copyright';
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

function Footer(props) {
    const classes = useStyles();

    return (
        <div>
            <BottomNavigation
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction component={RLink} to='/login' label="Spencer Nelson" icon={<CopyrightIcon />} />
                
                <BottomNavigationAction href="https://templateflip.com/" target="_blank" rel="noopener noreferrer"  label="templateflip.com" icon={<PaletteIcon />} >
                </BottomNavigationAction>
            </BottomNavigation>

        </div>
    );
}

export default Footer;