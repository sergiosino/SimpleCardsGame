import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import styles from '../styles/styles';

const Header = (props) => {
    const { timerFormat, attempts, gameWon } = props;

    const classes = styles();

    return (
        <Paper elevation={3} className={classes.titleContainer}>
            <Grid container spacing={1}>
                <Grid item xs={6} className={classes.alignCenter}>
                    {gameWon ? "Well done!" : "Look for the pairs!"}
                </Grid>
                <Grid item xs={6} className={classes.alignCenter}>
                    Timer: {timerFormat()}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;