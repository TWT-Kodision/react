import { Text, Heading, Card } from "@chakra-ui/react";

export const RecipeInfo = ({ recipe }) => {
  return (
    <>
      <Card maxW="sm" bg={"red.200"}>
        <Heading>Information</Heading>
        <Text>Mealtype: {recipe.mealType}</Text>
        <Text>Dish: {recipe.dishType}</Text>
        <Text>Time: {recipe.totalTime}</Text>
        <Text>Diet: {recipe.dietLabels.join(", ")}</Text>
        <Text>Health: {recipe.healthLabels.join(", ")}</Text>
        <Text>Cautions:{recipe.cautions.join(", ")}</Text>
        <Text>Portions: {recipe.yield}</Text>
      </Card>
    </>
  );
};
