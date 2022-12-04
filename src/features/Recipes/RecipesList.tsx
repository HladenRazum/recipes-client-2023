import Recipe from "./Recipe";
import { RecipeInterface } from "./types/recipe.interface";

interface RecipesListProps {
  recipes: RecipeInterface[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  if (recipes.length === 0) return null;

  return (
    <ul className='recipes-list'>
      {recipes &&
        recipes.map((recipe) => (
          <Recipe key={`recipe-${recipe.id}`} recipe={recipe} />
        ))}
    </ul>
  );
};

export default RecipesList;
