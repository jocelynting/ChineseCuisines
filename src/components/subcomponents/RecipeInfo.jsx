import "../../styles/RecipeInfo.css";
import { useState } from "react";

function RecipeInfo({ recipe, className }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`${className} recipe`}>
      <img className="recipe__image" src={recipe.image} alt={recipe.title} />
      <div className="recipe__details">
        <p className="recipe__name">🥗 {recipe.name}</p>
        <p className="recipe__description">{recipe.description}</p>
        <p className="recipe__details-title">🍗 Ingredients: </p>
        <p className="recipe__ingredients">{recipe.ingredients}</p>
        {isExpanded && (
          <p className="recipe__details-title">📝 Instructions: </p>
        )}
        {isExpanded && (
          <p className="recipe__instructions">{recipe.instructions}</p>
        )}
      </div>
      <button className="recipe__details-expand" onClick={handleClick}>
        {isExpanded ? "Hide Instructions" : "Show Instructions"}
      </button>
    </div>
  );
}

export default RecipeInfo;
