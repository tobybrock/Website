import React from "react";
import { Card, Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  about: {
    color: "#745c48",
  },
  card: {
    boxShadow: "none",
    backgroundColor: "#272624",
    opacity: "100%",
    width: "50%",
  },
  cardlarge: {
    boxShadow: "none",
    backgroundColor: "#272624",
    opacity: "100%",
    width: "80%",
  },
});

function About() {
  const classes = useStyles();
  return (
    <>
      <br />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Card className={classes.card}>
        <Grid
             container
             direction="column"
             justify="flex-start"
             alignItems="flex-start">
          <Typography variant="body2" className={classes.about}>
            About Me
          </Typography>
          <Typography variant="h3" className={classes.root}>
            <b>Who Am I Really?</b>
          </Typography>
          </Grid>
          <br />
          
          <Typography variant="h6" className={classes.about}>
            I’m a Sydney-based former electrical engineering student with a
            knack at telling bad jokes. I always thought my dream was to design
            more reliable and compact components used in space travel, that is
            until I took my first coding class in university and I’ve never
            looked back. Software allows me to express my love for the creative
            and problem-solving process that I’ve picked up from my time in
            engineering but I’m also allowed to break my code to improve it (in
            a separate Git branch, of course). My biggest strength is the
            ability to communicate software terms to the general public. I've
            gained this strength through working customer service roles and
            having to explain my engineering projects to friends and family
            alike. I’m inspired by the collaborative nature of software
            companies and I’d love to apply my engineering concepts to this
            field and push myself to become a better software engineer.
          </Typography>
        </Card>
      </Grid>
      <br />
    </>
  );
}

export default About;
