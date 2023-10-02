import { Text, Heading, Card } from "@chakra-ui/react";

export const NutrientList = ({ recipe }) => {
  return (
    <>
      <Card maxW="sm" bg={"yellow.200"}>
        <Heading>Nutrients</Heading>
        <Text>
          {recipe.totalNutrients.ENERC_KCAL.label}:{" "}
          {recipe.totalNutrients.ENERC_KCAL.quantity}{" "}
          {recipe.totalNutrients.ENERC_KCAL.unit}
        </Text>
        <Text>
          {recipe.totalNutrients.PROCNT.label}:{" "}
          {recipe.totalNutrients.PROCNT.quantity}{" "}
          {recipe.totalNutrients.PROCNT.unit}
        </Text>
        <Text>
          {recipe.totalNutrients.PROCNT.label}:{" "}
          {recipe.totalNutrients.PROCNT.quantity}{" "}
          {recipe.totalNutrients.PROCNT.unit}
        </Text>
        <Text>
          {recipe.totalNutrients.FAT.label}:{" "}
          {recipe.totalNutrients.FAT.quantity} {recipe.totalNutrients.FAT.unit}
        </Text>
        <Text>
          {recipe.totalNutrients.CHOCDF.label}:{" "}
          {recipe.totalNutrients.CHOCDF.quantity}{" "}
          {recipe.totalNutrients.CHOCDF.unit}
        </Text>
        <Text>
          {recipe.totalNutrients.CHOLE.label}:{" "}
          {recipe.totalNutrients.CHOLE.quantity}{" "}
          {recipe.totalNutrients.CHOLE.unit}
        </Text>
        <Text>
          {recipe.totalNutrients.NA.label}: {recipe.totalNutrients.NA.quantity}{" "}
          {recipe.totalNutrients.NA.unit}
        </Text>
      </Card>
    </>
  );
};
