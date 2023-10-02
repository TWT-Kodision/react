import { Text, Heading, Card } from "@chakra-ui/react";

export const IngredientsList = ({ recipe }) => {
  return (
    <>
      <Card maxW="sm" bg={"blue.200"}>
        <Heading>Ingredients</Heading>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient.food}</Text>
        ))}
      </Card>
    </>
  );
};
