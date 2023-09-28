import { useState } from "react";
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { tea, coffee } from "./utils/data";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  //	const userDrink = undefined;
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          <DrinkSearch />
        </>
      )}
    </div>
  );
};
