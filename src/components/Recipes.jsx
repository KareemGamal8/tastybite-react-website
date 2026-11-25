import { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=6")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div className="recipes container">
      <h3>Featured Recipes</h3>
      <div className="recipes-list">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </div>
  );
}

// 1. The component has no products
// 2. The component has a state to save the recipes
// 3. Fetch recipes by using useEffect only in the first time
// 4. Update State with recipes from fetching
// MPA => Multi Pages Application
// SPA => Single Page Application