// import React from 'react'

// const Declaration = () => {
//     return (
//         <div>
//             <span>Declaration says:"Zervus Ihr Zipfelklatscher.."</span>
            
//         </div>
//     )
// }

// export default Declaration

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: "30px",
  },
  typoStyle:{
    paddingTop: "20px"
  },
  colorTest:{
    color:"grey", 
    padding: theme.spacing(3, 2),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  console.log(classes)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="laptop-medical" size="6x" />
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h5" component="h5">
            Was
          </Typography>
          </Grid>
          <Grid item xs={12} >
          <Typography variant="body1" 
                      component="body1"
                      className={classes.typoStyle}
                     >
          lorem ipsum vla vlal fiheri iwe df iofho öihefögnq öeob
          </Typography>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={1}>
        <FontAwesomeIcon icon="chevron-right" size="4x" className={classes.colorTest}/>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="map-marker-alt" size="6x"/>
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h5" component="h5">
            Was
          </Typography>
          </Grid>
          <Grid item xs={12} >
          <Typography variant="body1" 
                      component="body1"
                      className={classes.typoStyle}
                     >
          lorem ipsum vla vlal fiheri iwe df iofho öihefögnq öeob
          </Typography>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={1}>
        <FontAwesomeIcon icon="chevron-right" size="4x"  className={classes.colorTest}/>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="calendar-alt" size="6x"/>
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h5" component="h5">
            Was
          </Typography>
          </Grid>
          <Grid item xs={12} >
          <Typography variant="body1" 
                      component="body1"
                      className={classes.typoStyle}
                     >
          lorem ipsum vla vlal fiheri iwe df iofho öihefögnq öeob
          </Typography>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={1}>
        <FontAwesomeIcon icon="chevron-right" size="4x" className={classes.colorTest}/>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="home" size="6x"/>
          </Grid>
          <Grid item xs={12} className={classes.typoStyle}>
          <Typography variant="h5" component="h5">
            Was
          </Typography>
          </Grid>
          <Grid item xs={12} >
          <Typography variant="body1" 
                      component="body1"
                      className={classes.typoStyle}
                     >
          lorem ipsum vla vlal fiheri iwe df iofho öihefögnq öeob
          </Typography>
          </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}
       direction="row"
       justify="space-between">
        <Grid   item
                direction="column"
                justify="center"
                alignItems="center">
          <Paper className={classes.paper}> 
          <FontAwesomeIcon icon="laptop-medical" size="6x" />
          <div>Was</div>
          <div>lorem ipsum vla vlal fiheri iwe df iofhoöih efö gnqöeob</div>
          </Paper>
        </Grid>
        <Grid   item
                direction="column"
                justify="center"
                alignItems="center">
          <Paper className={classes.paper}>
          <FontAwesomeIcon icon="map-marker-alt" size="6x"/>
          <div>Was</div>
          <div>lorem ipsum vla vlal fiheri iwe df iofho öihefögnq öeob</div>
          </Paper>
        </Grid>
        <Grid   item
                direction="column"
                justify="center"
                alignItems="center">
          <Paper className={classes.paper}>
          <FontAwesomeIcon icon="calendar-alt" size="6x"/>
          <div>Was</div>
          <div>lorem ipsum vla vlal fiheri iwe dfiofho hefög nqöeob</div>
          </Paper>
        </Grid>
        <Grid   item
                direction="column"
                justify="center"
                alignItems="center">
          <Paper className={classes.paper}>
          <FontAwesomeIcon icon="home" size="6x"/>
          <div>Was</div>
          <div>lorem ipsum vla vlal fiheri iwe dfiofh oöihefögn qöeob</div>
           </Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}
