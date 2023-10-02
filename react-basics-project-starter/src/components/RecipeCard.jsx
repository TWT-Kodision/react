import {
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Center,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  console.log();

  return (
    <ul>
      <Card
        gap={8}
        align="center"
        cursor={"pointer"}
        bg={"green.200"}
        onClick={() => clickFn(recipe)}
      >
        <CardHeader size="md">
          <Image src={recipe.image} borderRadius="lg" boxSize="md" />
          <Text align="center" fontSize="2xl" color="tomato">
            {recipe.label}
          </Text>
          {recipe.healthLabels.includes("Vegan") ? ( // if vegan show "vegan"
            <Center>
              <Badge>Vegan</Badge>
            </Center>
          ) : recipe.healthLabels.includes("Vegetarian") ? ( // elif vegetarian show "vegetarian" else print nothing
            <Center>
              <Badge>Vegetarian</Badge>
            </Center>
          ) : null}
        </CardHeader>
        <CardBody>
          <Text>Diet: {recipe.dietLabels.join(" ")}</Text>
          <Text>Cautions: {recipe.cautions.join(" ")} </Text>
          <Text>Type: {recipe.mealType.join(" ")}</Text>
          <Text>Dish: {recipe.dishType.join(" ")}</Text>
        </CardBody>
      </Card>
    </ul>
  );
};
