import { portfolioItems } from "../utils/data";
import { PortfolioItemCard } from "../components/PortfolioItemCard";

export const PortfolioPage = ({ clickFn }) => {
  console.log(portfolioItems);
  return (
    <>
      {portfolioItems.map((item) => (
        <PortfolioItemCard item={item} clickFn={clickFn} />
      ))}
    </>
  );
};
