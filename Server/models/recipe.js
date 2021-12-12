import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imgurl: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
});

export const Recipes = mongoose.model("Recipe", recipeSchema);

