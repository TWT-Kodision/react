import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
//import { DrinkItem } from "./components/Drinkitem";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welcome to our cafe!";

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading marginBottom="2rem" fontSize="3xl" color="blue.400">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
