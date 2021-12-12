import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { BackButton } from "./App";
<Router>
  <Switch>
    <Route path="/about">
      <MyAppBar />
      <BackButton />
    This Page Is About Yummy Recipes...
    </Route>
  </Switch>
  ;
</Router>;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <h3>YUMMY RECIPES</h3>
          </Typography>
          
  

          <Typography>
            <Link to="/addrecipe" style={{ color: "white" }}>
              Add Your Recipe
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
