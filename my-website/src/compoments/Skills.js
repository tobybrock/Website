import React from 'react';
import { Typography, makeStyles, Grid, Card } from '@material-ui/core';
import { SkillBars } from 'react-skills';

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

function Skills() {
    const classes = useStyles();

    const skillsData1= [
        {
          name: 'React',
          level: 85,
          color: '#745c48',
        },
        {
          name: 'HTML',
          level: 100,
          color: '#745c48',
        },
        {
            name: 'CSS',
            level: 100,
            color: '#745c48',
          },
          {
            name: 'JQuery',
            level: 100,
            color: '#745c48',
          }
      ]

      const skillsData2= [
        {
          name: 'JavaScript',
          level: 85,
          color: '#745c48',
        },
        {
          name: 'Node.js',
          level: 100,
          color: '#745c48',
        },
        {
            name: 'Ruby on Rails',
            level: 95,
            color: '#745c48',
          },
          {
            name: 'Python',
            level: 20,
            color: '#745c48',
          }
      ]

      return(
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
          <Typography variant="h3" className={classes.root}>
          <b>My Skills</b>
          </Typography>
          </Grid>

        

            <SkillBars skills={skillsData1} duration='4' levelProgress='true' />
            <SkillBars skills={skillsData2} duration='4' levelProgress='true' />

         {/* <Grid
             container
             direction="column"
             justify="space-between"
             alignItems="flex-end"> 

             <SkillBars skills={skillsData2} />
            </Grid> */}

       
         </Card>
         </Grid>
      )
}

export default Skills;