import React, { useState } from 'react';
import clsx from 'clsx'
import { Link as RLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MainDrawer from './MainDrawer'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import TableChartIcon from '@material-ui/icons/TableChart';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
}));

const getIcon = (listItem) => {

    let rtnValue
//'Home', 'Portfolio', 'About', 'Contact'
    switch (listItem) {
        case 'Home':
            rtnValue = <HomeIcon/>
            break;
        case 'Portfolio':
            rtnValue = <TableChartIcon/>
            break;
        case 'About':
            rtnValue = <PersonIcon/>
            break;
        case 'Contact':
            rtnValue = <MailIcon/>
            break;
        default:
            break;
    }


    return rtnValue
}

function Header(props) {
    const classes = useStyles()

    const [openDrawer, setOpenDrawer] = useState(false)

    const onClickHandler = () => {

        setOpenDrawer(!openDrawer)
    }

    return (

        <div>
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar >
                        <IconButton edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={onClickHandler}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Spencer Nelson (This website is in progress)
                        </Typography>
                        <Button color="inherit" component={RLink} to='/'>Home</Button>
                        <Button color="inherit" component={RLink} to='/portfolio'>Portfolio</Button>
                        <Button color="inherit" component={RLink} to='/about'>About</Button>
                        <Button color="inherit" component={RLink} to='/contact'>Contact</Button>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </div>

            <div>
                {/* Drawer */}
                <Drawer open={openDrawer} onClose={onClickHandler}>
                    <div
                    className={classes.list}
                    role="presentation">
                    <List>
                        {['Home', 'Portfolio', 'About', 'Contact'].map((text, index) => (
                            <ListItem button onClick={onClickHandler} component={RLink} to={`/${text.toLowerCase()}`} key={text}>
                                <ListItemIcon>{getIcon(text)}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    </div>
                </Drawer>
            </div>

        </div>

    );
}

export default Header;