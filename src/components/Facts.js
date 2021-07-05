

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
    margin: theme.spacing(2),
  },
  paper: {
    
    padding: theme.spacing(5),
    textAlign: 'center',
    border: 'none',
    fontSize: "30px",
    backgroundColor: "transparent"
  },
  typoStyle:{
    paddingTop: "20px"
  },

}));

export default function Facts() {
  const classes = useStyles();
  console.log(classes)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper} elevation={0}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h4" component="h5">
          1000 zufriedene Kunden
          </Typography>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={1}>
      
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper} elevation={0}>
          <Grid item xs={12}>
         
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h4" component="h5">
            1000 zufriedene Kunden
          </Typography>
          </Grid>
          <Grid item xs={12} >
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={1}>
       
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper} elevation={0}>
          <Grid item xs={12}>
          
          </Grid>
          <Grid item xs={12} className={classes.typoStyle} >
          <Typography variant="h4" component="h5">
          1000 zufriedene Kunden
          </Typography>
          </Grid>
          <Grid item xs={12} >
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={1}>
        
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper} elevation={0}>
          <Grid item xs={12}>
         
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h4" component="h5">
          1000 zufriedene Kunden
          </Typography>
          </Grid>
          <Grid item xs={12} >
          </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
