import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import LoopIcon from '@material-ui/icons/Loop';
import Typography from '@material-ui/core/Typography';

import styles from '../styles/styles';

const WinDialog = (props) => {
  const { dialogOpen, setDialogOpen, timerFormat, attempts, resetGame } = props;

  const classes = styles();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={dialogOpen}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">
        <Typography variant="h5">
          Nice one!
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6} className={classes.alignCenter}>
            <Typography variant="h6">
              Timer: {timerFormat()}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.alignCenter}>
            <Typography variant="h6">
              Attemps: {attempts}
            </Typography>
          </Grid>
          <div style={{ height: 50 }} />
          <Grid item xs={12} lg={12} className={classes.alignCenter}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => { setDialogOpen(true); resetGame(); }}
              startIcon={<LoopIcon />}
            >
              Retry
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WinDialog;