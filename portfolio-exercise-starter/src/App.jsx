import { useState } from "react";
import "./App.css";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";

export const App = () => {
  //console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.
  const [userItem, setUserItem] = useState();
  console.log({ userItem });
  const handleClick = () => {
    console.log("test click");
  };

  return (
    <div className="App">
      {userItem ? (
        <PortfolioItemPage clickFn={setUserItem} item={userItem} />
      ) : (
        <>
          <p>{userItem}</p>
          <button onClick={handleClick}>test button</button>
          <PortfolioPage clickFn={setUserItem} />
        </>
      )}
    </div>
  );
};
