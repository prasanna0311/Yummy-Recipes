import React from "react";
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

export default function Recipecard({ Data }) {
  // console.log(props);
  // const Data;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    // console.log(props.Data, Data.recipe.label);
    // console.log(props.label);
  };

  return (
    <Card className={classes.root} style={{ minHeight: 150, width: 325 }}>
      <CardHeader style={{ height: 96 }} title={Data.label} />
      <CardMedia className={classes.media} image={Data.image} />
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
            <ul>
              {Data.ingredientLines.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            {/* <ul>
              <li>{Data.ingredientLines}</li>
            </ul> */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
