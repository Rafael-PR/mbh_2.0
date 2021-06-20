import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=> ({
    root:{
      minHeight: '40vh',
      //minHeight:'400px',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/mbh_2.0_bg1.png'})`,
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
    },

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
    inputLeft:{
      minHeight: '40px',
      borderTopLeftRadius:'10px',
      borderBottomLeftRadius:'10px',
      paddingLeft:'5px',
      borderColor:'#5FA1E7'
    },
    inputMid:{
      minHeight: '40px',
      paddingLeft:'5px',
      borderColor:'#5FA1E7'
      
    },
    find:{
      minHeight: '40px',
      maxWidth:'60px',
      borderTopRightRadius:'10px',
      borderBottomRightRadius:'10px',
      backgroundColor:'#E0B14A',
      colorAdjust:'#FFFFFF',
      textAlign:'center',
      borderColor:'#5FA1E7',
      //++++++++++++ Rahmen/Border gefällt nicht so +++++++++++++++++++++
      //++++++++++++ Schriftfarbe ändern ! +++++++++++++++++++++++++++
      
    },

    
   

  }));



const Header = () => {

    const classes = useStyles();  

    return (
        <div className={classes.root}>
          <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch">
            <Grid
              item xs={12}>
                <Typography variant="h4" color="#FFFFFF" gutterBottom >
                  Bereit vom Schmerz befreit zu werden ?
                  </Typography>
            </Grid>
            <Grid
              item xs={12}>
                Mit Mobile Health jetzt unkompliziert Deinen Therapeuten nach Hause bestellen.
            </Grid>
            <Grid
              item xs={12}
              className={classes.inputFields}
              >
                <div className={classes.formInputs}>
                  <label>
                    <input name='name' type='text' placeholder='Was'className={classes.inputLeft} />
                  </label>

                  <label>
                    <input name='email' type='email' placeholder='Wo' className={classes.inputMid} />
                  </label>

                  <label>
                    <input name='location' type='text' placeholder='Finden' className={classes.find} />
                  </label>
          
                </div>
            </Grid>


          </Grid>
            
            
        </div>
    )
}

export default Header
