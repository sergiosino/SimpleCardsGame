import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LoopIcon from '@material-ui/icons/Loop';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));


const ApplicationBar = (props) => {
    const { setDialogOpen, resetGame, showRetry } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Simple card game
                </Typography>
                    {
                        showRetry &&
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => resetGame()}
                            color="inherit"
                        >
                            <LoopIcon />
                        </IconButton>
                    }
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => setDialogOpen(true)}
                        color="inherit"
                    >
                        <SettingsOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{ height: 20 }} />
        </React.Fragment>
    );
}

export default ApplicationBar;