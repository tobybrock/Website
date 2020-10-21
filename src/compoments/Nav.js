import React from 'react';
import { AppBar, Toolbar, Button, makeStyles, Grid, IconButton} from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import Resume from './Resume.pdf';

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
        <AppBar position="fixed" id="top" className={classes.appbar} >
          <Toolbar >
            <IconButton color="inherit" href="#top">
            <HomeIcon color="inherit" />
            </IconButton>
            <Grid 
            justify="center"
            container 
            >       
            <Button color="inherit" href="#about" className={classes.menuButton}>About</Button>
            <Button color="inherit" href="#project" className={classes.menuButton}>Projects</Button>
            <Button color="inherit" href="#contact" className={classes.menuButton}>Contact Me</Button>
            <Button color="inherit" href={Resume} target="mynewtab" className={classes.menuButton}>My Resume</Button>
            </Grid> 
            
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
  }

  export default Nav;