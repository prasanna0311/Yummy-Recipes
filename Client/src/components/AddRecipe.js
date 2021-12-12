import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

/** import from materail ui */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  let History = useHistory();
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [imgurl, setImgUrl] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleRecipedata = () => {
    const myRecipie = {
      title,
      imgurl,
      ingredients,
    };
    axios.post(
      `http://localhost:5000/recipes/addrecipe`,
      myRecipie
    )
      .then((response) => {
        // return  response;
        // localStorage.setItem("auth", JSON.stringify(response.data));
        // const token = localStorage.getItem("token");
        History.push(`/home`);
      })
      .catch((error) => {
        //return  error;
        History.push(`/addrecipe`);
      });

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FastfoodIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Your Own Recipe
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Recipe name"
                label="Recipe Name"
                autoComplete="name"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Recipe Url"
                label="Recipe url"
                // name="email"
                // autoComplete="email"
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // name="password"
                label="Recipe"
                type="text"
                // id="password"
                // autoComplete="current-password"
                onChange={(e) => setIngredients(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleRecipedata}
          >
            Add Recipie
          </Button>
        </form>
      </div>
    </Container>
  );
}
