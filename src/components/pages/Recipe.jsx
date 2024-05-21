import RecipeCategory from "../subcomponents/RecipeCategory";
import RecipeInfo from "../subcomponents/RecipeInfo";
import { recipes } from "../../data/recipe";
import { categories } from "../../data/recipe";
import { useState } from "react";

import "../../styles/Recipe.css";

function Recipe() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategorySelected = (category) => {
    setSelectedCategory(category);
  };

  const category = categories.map((category) => (
    <RecipeCategory
      className="recipe__category"
      key={category.name}
      category={category.name}
      categorySelected={handleCategorySelected}
    />
  ));

  const recipe = recipes
    .filter((recipe) => recipe.category === selectedCategory)
    .map((recipe) => (
      <RecipeInfo className="recipe__info" key={recipe.name} recipe={recipe} />
    ));

  return (
    <div className="recipes">
      <div className="recipe__category-list">{category}</div>
      <div className="recipe__list">{recipe}</div>
    </div>
  );
}

export default Recipe;
