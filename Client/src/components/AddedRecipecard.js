import React from "react";
import { useState ,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", 
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function AddedRecipecard() {
  // console.log(props);
  // const Data;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    // console.log(props.Data, Data.recipe.label);
    // console.log(props.label);
  };
  const [Data, setData] = useState("");
  const [title, setTitle] = useState("");
const FetchData = () =>{
  axios.get(
    `https://foodrecipeappnode.herokuapp.com/recipes/getrecipe`
  )
    .then((response) => {
      console.log(response.data)
      setData(response.data)
      // (response.data.map((e) => {
       
      //   setTitle(e.title)
      // }))
  
    })
    .catch((error) => {
      return  error;
    //   History.push(`/addrecipe`);
    });
}
useEffect(() => {
  FetchData()
}, [])


  return (
    <>
    
      <Card className={classes.root} style={{ minHeight: 150, width: 325 }}>
     
      <CardHeader style={{ height: 96 }} title={title} />



      {/* <CardMedia className={classes.media} image={imgurl} /> */}
      <CardActions disableSpacing>
        <CardMedia>Show More...</CardMedia>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
              {/* ingrediants goes here */}
            {/* <ul>
              {Data.map((e) => {
                return <li>{e.ingredients}</li>;
              })}
            </ul> */}
            {/* <ul>
              <li>{Data.ingredientLines}</li>
            </ul> */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
)
   </>
  );
}
