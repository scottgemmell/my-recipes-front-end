// import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = state => state.recipes;

export const selectRecipe = state => state.recipes.list.find(recipe => +recipe.id === 1);