import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchInputField from './SearchInputField'


const useStyles = makeStyles((theme)=> ({

    root:{
      position: 'relative',
      // width: "100%",
      minHeight: '40vh',
      //minHeight:'400px',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/mbh_2.0_bg3.png'})`,
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',

    },

    overlay:  {
      minHeight: '100%',
      width: '100%',
      position:"absolute",
      background:'linear-gradient(175deg, #5FA1E7, #5FA1E7 55%, transparent 55%, transparent)',
      // // zIndex: "1",
      // // left:"20px",
      // // right:calc(0.5 * 33%),
      // // top:calc(33% + 30px),
      // background: 'blue',
      // borderBottom: "40px",
      // '&:before':{

      }
  ,
    

    inputFields:{
      display:'flex',
      justifyContent:'center',
      paddingTop:'40px'
    },

    formInputs: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      marginBottom: '2%',
    },


  }));



const Header = () => {

    const classes = useStyles();  

    return (
      <>
        <div className={classes.root}>
        <div className={classes.overlay}>
          <Grid
          
          container
          direction="column"
          justify="center"
          alignItems="stretch">
            <Grid
              item xs={12}>
                <Typography variant="h3" color="primary" fontweight="bold"gutterBottom >
                  Bereit vom Schmerz befreit zu werden ?
                  </Typography>
            </Grid>
            <Grid
              item xs={12}>
                <Typography variant="h6" color="primary"  >
                  Mit Mobile Health jetzt unkompliziert Deinen Therapeuten nach Hause bestellen.
                  </Typography>
                
            </Grid>
            <Grid
              item xs={12}
              className={classes.inputFields}
              >
                {/* <div className={classes.formInputs}>
                  <label>
                    <input name='name' type='text' placeholder='Was'className={classes.inputLeft} />
                  </label>

                  <label>
                    <input name='email' type='email' placeholder='Wo' className={classes.inputMid} />
                  </label>

                  <label>
                    <input name='location' type='text' placeholder='Finden' className={classes.find} />
                  </label>
          
                </div> */}
              <SearchInputField className={classes.inputFields}/>
            </Grid>

            
          

          </Grid>
          </div>
        </div>
      
        </>
    )
}

export default Header
