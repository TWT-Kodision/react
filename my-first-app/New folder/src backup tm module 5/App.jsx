import { DrinkButtons } from "./components/DrinkButtons";
import { tea, coffee } from "./utils/data";
import { DrinkChoice } from "./components/UI/DrinkChoice";
import "./App.css";

export const App = () => {
  const description = "This app is going to change your life.";
  const greet = "Welcome to our cafe!";
  const userDrink = undefined;
  const greeting = () => {
    return (
      <>
        <h1>{greet}</h1>
        <p>{description}</p>
      </>
    );
  };

  return (
    <>
      <div className="App">
        {userDrink ? (
          <DrinkChoice drink={userDrink} />
        ) : (
          <>
            <h3>{greeting()}</h3>
            <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          </>
        )}
      </div>
      <div className="card"></div>
      {userDrink && <DrinkChoice drink={userDrink} />}
    </>
  );
};
