// import React from 'react'

// const Declaration = () => {
//     return (
//         <div>
//             <span>Declaration says:"Zervus Ihr Zipfelklatscher.."</span>
            
//         </div>
//     )
// }

// export default Declaration

import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { CenterFocusStrong } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),

    
  },
  paper: {
    padding: theme.spacing(2,2),
    // margin: theme.spacing(2,2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: "2vw",
  },
  typoStyle:{
    paddingTop: "20px"
  },
  chevron:{
    padding: theme.spacing(0,0)
  },
  colorTest:{
    padding: theme.spacing(0,0,0,0),
    margin: theme.spacing(0,0,0,0),
    color:"#5FA1E7", 
    padding: theme.spacing(3, 2),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  icons: {
    fontSize: '7.0rem',
    color:"#5FA1E7",
  },
}));

export default function FullWidthGrid() {

  const classes = useStyles();
  console.log(classes);
  const size = useWindowSize();
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div className={classes.root}>
      {size.height}{size.width}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="laptop-medical" className={classes.icons} />
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
        <Grid item xs={12} sm={1} md={1}>
        <FontAwesomeIcon icon="chevron-right" size="4x" className={classes.colorTest}/>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="map-marker-alt" className={classes.icons}/>
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
        <Grid item xs={12} sm={1} md={1}>
        <FontAwesomeIcon icon="chevron-right" size="4x"  className={classes.colorTest}/>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="calendar-alt" className={classes.icons}/>
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
        <Grid item xs={12} sm={1} md={1}>
        <FontAwesomeIcon icon="chevron-right" size="4x" className={classes.colorTest}/>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <FontAwesomeIcon icon="home" className={classes.icons}/>
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
