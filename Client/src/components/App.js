// import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Recipecard from "./Recipecard";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import {
  useHistory
} from "react-router-dom";

function RecipeContent(props) {
  return (
    <div className="recipes">
      {props.Recipes.map((data) => {
        return <Recipecard Data={data.recipe} />;
      })}
    </div>
  );
}
function BackButton() {
  const histroy = useHistory();
  return (
    <div>
      <Button
        onClick={() => histroy.goBack()}
        variant="outlined"
        color="primary"
      >
        Go Back
      </Button>
    </div>
  );
}

function App() {
  const [Search, setSearch] = useState("chicken");
  const [Recipes, setRecipes] = useState([]);

  const SearchData = (e) => setSearch(e.target.value);

  const YOUR_APP_KEY = "0f33f2508202f90362a4fcb3b3503b7c";
  const YOUR_APP_ID = "fb3cd7c6";

  function recipecall() {
    fetch(
      `https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    )
      .then((data) => data.json())
      .then((x) => {
        console.log(x.hits);
        setRecipes(x.hits);
      });
  }
  useEffect(() => {
    recipecall();
  }, []);

  return (
    <div className="Apppage">
      <div className="search-container">
        <Paper variant="outlined">
          <div className="search-icon">
            <SearchIcon color="secondary" />
          </div>
          <form>
            <InputBase
              className="search-input"
              onChange={SearchData}
              autoFocus
            />

            <Button
              type="button"
              color="secondary"
              variant="contained"
              onClick={recipecall}
            >
              Search
            </Button>
            {console.log(Search)}
          </form>
        </Paper>
      </div>
      <div className="contents">
        <RecipeContent Recipes={Recipes}></RecipeContent>
      </div>
    </div>
  );
}

export { App, BackButton };
