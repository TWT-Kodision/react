import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { Button } from "@chakra-ui/react";

export const PortfolioItemPage = ({ clickFn, item }) => {
  return (
    <>
      <div>
        <PortfolioItemCard clickFn={clickFn} item={item} />
      </div>
      <Button onClick={() => clickFn()} colorScheme="blue">
        Back
      </Button>
    </>
  );
};
