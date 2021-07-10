import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { red } from 'chalk';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderRadius:'20px'
    // borderTopRightRadius:'10px',
    // borderBottomRightRadius:'10px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    // backgroundColor:"grey",
    color:"#5FA1E7",
    fontWeight:"bold"
  },
  divider: {
    height: 28,
    margin: 4,
  },
  icon:{
    color:"#5FA1E7",
    minHeight:"25px",
    minWidth:"25px",
    marginLeft:theme.spacing(1),
    
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      
        <FontAwesomeIcon icon="search" className={classes.icon} />
      
      <InputBase
        className={classes.input}
        placeholder="Was"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <Divider className={classes.divider} orientation="vertical" />

      <FontAwesomeIcon icon="map-marker-alt" className={classes.icon}/>

      <InputBase
        className={classes.input}
        placeholder="Wo"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton  className={classes.iconButton} aria-label="directions">
        <Typography>FINDEN</Typography>
      </IconButton>
    </Paper>
  );
}