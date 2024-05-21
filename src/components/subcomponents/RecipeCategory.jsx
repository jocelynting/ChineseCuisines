import "../../styles/RecipeCategory.css";

function RecipeCategory({ category, categorySelected }) {
  return (
    <button
      className="recipe__category-name"
      onClick={() => categorySelected(category)}
    >
      {category}
    </button>
  );
}

export default RecipeCategory;
