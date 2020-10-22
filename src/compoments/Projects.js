import React from "react";
import { Typography, makeStyles, Grid, Card} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import StoreApp from "../img/StoreApp.PNG";
import CookbookApp from "../img/CookbookApp.PNG";
import ResumeCreatorApp from "../img/ResumeCreatorApp.PNG";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  about: {
    color: "#745c48",
  },
  card: {
    boxShadow: "none",
    backgroundColor: "#745c48",
    width: "50%",
  },
  cardhead: {
    boxShadow: "none",
    backgroundColor: "#272624",
    opacity: "100%",
    width: "50%",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
});

function Project() {
  const classes = useStyles();

  var items = [
    {
      name: "Book e-commerce Site",
      image: StoreApp,
      link: "https://github.com/tobybrock/MERN-Fullstack-Store-App",
      description:
        "A book shop app created with React & node.js which contains products displayed on the frontend, with working cart and payment routes, products and order details are stored on the backend and belong to a user.",
    },
    {
      name: "Resume Generator App",
      image: ResumeCreatorApp,
      link: "https://github.com/tobybrock/FullStack-React_Rails",
      description: "A Resume Creator created with React & Ruby on Rails and contains resumes displayed on the frontend and stored in the backend which are owned by a user account.",
    },
    {
        name: "Cookbook App",
        image: CookbookApp,
        link: "https://github.com/tobybrock/Cookbook-Fullstack-App",
        description: "A recipe generator created with JQuery & Node.js and contains a working backend with user and favourites functionality.",
      },
  ];

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Card className={classes.cardhead}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography variant="h3" className={classes.root} id='project'>
              <b>My Projects</b>
            </Typography>
          </Grid>
        </Card>
        <br />
        <Carousel
          autoPlay={false}
          indicators={false}
          navButtonsAlwaysVisible={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Card className={classes.card}>
        <Typography variant="h4" className={classes.root}>
          {props.item.name}
        </Typography>
        <a href={props.item.link}>
          <img src={props.item.image} alt={props.item.name} className={classes.img}></img>
        </a>
        <Typography variant="h6" className={classes.root}>
          {props.item.description}
        </Typography>
      </Card>
    </Grid>
  );
}
export default Project;
