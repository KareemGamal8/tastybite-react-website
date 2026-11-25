import {
  IconArrowRight,
  IconChefHat,
  IconClock,
  IconHeart,
  IconStarFilled,
  IconToolsKitchen,
  IconToolsKitchen3,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

export function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
        <div>
          <p className="recipe-cuisine">
            <IconWorld size={16} /> {recipe.cuisine}
          </p>
          <p className="recipe-difficulty">
            <IconChefHat size={16} /> {recipe.difficulty}
          </p>
        </div>
      </div>
      <div className="recipe-content">
        <div className="recipe-header">
          <h4 className="recipe-name">{recipe.name}</h4>
          <p className="recipe-rating">
            <IconStarFilled size={12} /> <span>{recipe.rating}</span>
          </p>
        </div>
        <h5 className="recipe-meal">
          <IconToolsKitchen size={14} />
          <div>
            {recipe.mealType.map((mealType, index) => {
              return (
                <span key={index}>
                  {mealType} {index + 1 < recipe.mealType.length && " - "}
                </span>
              );
            })}
          </div>
        </h5>
        <div className="recipe-meta">
          <p className="recipe-meta-item">
            <IconClock size={14} /> <span>{recipe.prepTimeMinutes} min</span>
          </p>
          <p className="recipe-meta-item">
            <IconUsers size={14} /> <span>{recipe.servings} serve</span>
          </p>
          <p className="recipe-meta-item">
            <IconToolsKitchen3 size={14} />
            <span>{recipe.caloriesPerServing} cal</span>
          </p>
        </div>
        <hr className="recipe-line" />
        <div className="recipe-actions">
          <button className="primary-btn">
            <span>View Recipe</span> <IconArrowRight size={12} />
          </button>
          <button className="secondary-btn">
            <IconHeart size={16} />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
