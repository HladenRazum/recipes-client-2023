import { RecipeInterface } from "./types/recipe.interface";

interface RecipeProps {
  recipe: RecipeInterface;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <li className='recipe'>
      <a href='/'>
        <article>
          <h3>{recipe.name}</h3>
          <span>category: {recipe.category ?? "-"}</span>
        </article>
      </a>
    </li>
  );
};

export default Recipe;
