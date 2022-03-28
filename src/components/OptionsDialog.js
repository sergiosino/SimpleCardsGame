import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import styles from '../styles/styles';

const FullDialog = (props) => {
  const { dialogOpen, setDialogOpen, numberCards, changeNumberCards, flipTime, changeFlipTime } = props;

  const classes = styles();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={dialogOpen}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} style={{display: "flex"}}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Cards number</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={numberCards}
                onChange={changeNumberCards}
                label="Cards number"
              >
                <MenuItem value={4}>8</MenuItem>
                <MenuItem value={6}>12</MenuItem>
                <MenuItem value={12}>24</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6} style={{display: "flex"}}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Card flip time (seconds)</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={flipTime}
                onChange={changeFlipTime}
                label="Card flip time (seconds)"
              >
                <MenuItem value={1000}>1</MenuItem>
                <MenuItem value={750}>0.75</MenuItem>
                <MenuItem value={500}>0.5</MenuItem>
              </Select>
            </FormControl>
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

export default FullDialog;