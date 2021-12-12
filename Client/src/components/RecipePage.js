import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Recipecard from "./Recipecard";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";


function RecipeContent(props) {
  return (
    <div className="recipes">
      {props.Recipes.map((data) => {
        return <Recipecard Data={data.recipe} />;
      })}
    </div>
  );
}

function RecipePage() {
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
    <div style={{ minHeight: "100vh" }}>
      {/* new contenr */}
      <div
        style={{
          margin: "20px 0",
          position: "relative",
          paddingLeft: "200px",
          paddingRight: "200px",
        }}
      >
        <Paper variant="outlined">
          <div
            style={{
              position: "absolute",
              pointerEvents: "none",
              top: "30%",
              left: "17px",
              paddingLeft: "200px",
            }}
          >
            <SearchIcon color="primary" />
          </div>
          <form
            style={{
              
              padding: "10px",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <InputBase
              style={{
                padding: "0 calc(1em + 20px)",
                color: "inherit",
                width: "100%",
              }}
              onChange={SearchData}
              autoFocus
            />

            <Button
              style={{
                width: "83.8px",
              }}
              type="button"
              color="primary"
              variant="contained"
              onClick={recipecall}
            >
              Search
            </Button>
            {console.log(Search)}
          </form>
        </Paper>
      </div>
      <div>
        <RecipeContent Recipes={Recipes}></RecipeContent>
      </div>
    </div>
  );
}

export default RecipePage;
