import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import Typical from 'react-typical';
import Headshot from '../img/Headshot.jpg';
import header from "../img/header.jpg";

const useStyles = makeStyles({
    root: {
    border: 0,
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    boxShadow: '0 3px 5px 2px #d0d2ce',
    color: 'white',
    height: 700,
    width: '100%',
    backgroundColor: '#ececea',
    clipPath: 'polygon(0 0, 0 100%, 100% 70%, 100% 0)',
    },
    img: {
        width: '20%',
        height: '60%',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: '#272624',
    },
  });

function Header(props) {
    const classes = useStyles();

    return(
<div mt={-3} className={classes.root} >
<Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="center"
>
    <img src={Headshot} alt="Headshot" className={classes.img}/>
    <br />
    <Typography variant='h3'>
    Hello I'm Toby
    </Typography>
    <Typography variant='h6'>
    <Typical
        steps={["I'm a Junior Developer 💻", 1000,
         "I'm a Skier ⛷️", 1000,
         "I'm a Home Cook 🍳", 1000,
         "I'm a Brewer 🍺", 1000,
         "I'm a Baker 🍞", 1000,
         "I'm a Forward Thinker 🤔💭", 1000,
         "I'm a Problem Solver 💡", 1000,
         "I'm a Jogger 🏃", 1000,
         "I'm a Voyager ✈️", 1000,]}
        loop={Infinity}
        wrapper="p"
      />
      </Typography>
    </Grid>
</div>
    )
}

export default Header;