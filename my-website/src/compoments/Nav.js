import React from 'react';
import { AppBar, Toolbar, Button, makeStyles, Grid, Typography} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  menuButton: {
    color: 'white',
    paddingRight: 20,
    paddingLeft: 20,
    "&:hover": {
     borderBottom: "2px solid white",
     borderBottomWidth: 'thick',
     borderBottomRightRadius: '0px',
     borderBottomLeftRadius: '0px',
  }
},
appbar: {
  backgroundColor: 'inherit',
},
});

function Nav() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <AppBar position="fixed" className={classes.appbar} >
          <Toolbar >
            <HomeIcon color="inherit" />
            <Grid 
            justify="center"
            container 
            >       
            <Button color="inherit" className={classes.menuButton}>About</Button>
            <Button color="inherit" className={classes.menuButton}>Projects</Button>
            <Button color="inherit" className={classes.menuButton}>Contact Me</Button>
            <Button color="inherit" className={classes.menuButton}>My Resume</Button>
            </Grid> 
            
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
  }

  export default Nav;