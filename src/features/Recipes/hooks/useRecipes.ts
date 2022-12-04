import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { RecipeInterface } from "../types/recipe.interface";

const recipesArr: RecipeInterface[] = [
  {
    id: "1",
    name: "Cheese cake",
  },
  {
    id: "2",
    name: "Baked Pork",
    category: "pork",
  },
  {
    id: "3",
    name: "Some more complicated recipe",
    category: "dessert",
  },
];

const useRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeInterface[]>([]);

  const { data } = useFetch("http://localhost:9999/recipes");

  console.log(data);

  useEffect(() => {
    setRecipes(recipesArr);
  }, []);

  return { recipes };
};

export default useRecipes;
