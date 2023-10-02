import {
  Image,
  Heading,
  Center,
  SimpleGrid,
  Button,
  Card,
} from "@chakra-ui/react";
import { IngredientsList } from "../components/IngredientsList";
import { NutrientList } from "../components/NutrientList";
import { RecipeInfo } from "../components/RecipeInfo";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <div>
        <Card gap={8} align="center">
          <Center>
            <Heading>{recipe.label}</Heading>
          </Center>{" "}
          <Image src={recipe.image} height={300} width={300} />
          <SimpleGrid columns={[1, null, 3]} spacing="40px">
            <RecipeInfo recipe={recipe} />
            <IngredientsList recipe={recipe} />
            <NutrientList recipe={recipe} />
          </SimpleGrid>
          <Button
            colorScheme="blue"
            size="lg"
            cursor={"pointer"}
            onClick={() => clickFn()}
          >
            Back
          </Button>
        </Card>
      </div>
    </>
  );
};
