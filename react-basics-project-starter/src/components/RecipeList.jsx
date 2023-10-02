import { RecipeCard } from "../components/RecipeCard";
import { SimpleGrid } from "@chakra-ui/react";

export const RecipeList = ({ recipes, clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(recipes.hits[0].recipe.label);

  return (
    <>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.label} recipe={recipe} clickFn={clickFn} />
        ))}
      </SimpleGrid>
    </>
  );
};
