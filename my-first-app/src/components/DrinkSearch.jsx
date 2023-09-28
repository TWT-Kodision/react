import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "./DrinkList";
//import { PortfolioPage } from "../pages/PortfolioPage";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const buttonProps = {
    imageHeight: 50,
    imageWidth: 50,
  };

  return (
    <Center flexDir={"column"} gap={5}>
      <label>Search for drinks:</label>
      <TextInput changeFn={handleChange} w={200} mb={8} />
      <DrinkList drinks={matchedDrinks} clickFn={clickFn} {...buttonProps} />
    </Center>
  );
};

/*
<PortfolioPage drinks={portfolioItems} clickFn={clickFn} />*/
