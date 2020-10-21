import React from "react";
import { Button, Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      color: "white",
    },
    about: {
      color: "#745c48",
    },
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
  });

function Contact() {
    const classes = useStyles();
  return (
    <>
      <hr />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Typography variant="h3" className={classes.root} id='contact'>
          <ul><b>Contact Me</b></ul>
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        
          <Button target="mynewtab" href="https://github.com/tobybrock?tab=repositories" className={classes.menuButton}>Github</Button>
          <Button target="mynewtab" href="https://www.linkedin.com/in/tobias-brocklehurst/" className={classes.menuButton}>LinkedIn</Button>
          <Typography variant="body1" className={classes.root}>
          <b>tobybrocklehurst6@gmail.com</b>
        </Typography>
          

      </Grid>
    </>
  );
}

export default Contact;