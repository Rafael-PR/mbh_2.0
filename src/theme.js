import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


const font = "'Montserrat', sans-serif";


const theme = createMuiTheme({
  
  typography: {
    fontFamily: font,
  },

  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#b5bdb7',
    },
  },
  
});

export default theme;