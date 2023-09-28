import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn, ...buttonProps }) => {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkItem
          key={drink.id}
          drink={drink}
          clickFn={clickFn}
          {...buttonProps}
        />
      ))}
    </>
  );
};
