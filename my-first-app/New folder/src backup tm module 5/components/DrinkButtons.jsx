import { Button } from "./UI/Button";
export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2 class="button-group"> Would you like tea or coffee</h2>
      <Button text={drinkOne} />
      <Button text={drinkTwo} />
    </>
  );
};
