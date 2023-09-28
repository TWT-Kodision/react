import { PortfolioItemCard } from "../components/PortfolioItemCard";

export const PortfolioPage = ({ drinks, clickFn }) => {
  return (
    <>
      {drinks.map((item) => (
        <PortfolioItemCard
          clickFn={clickFn}
          drink={drinks}
          item={item}
          key={item.id}
        />
      ))}
    </>
  );
};
