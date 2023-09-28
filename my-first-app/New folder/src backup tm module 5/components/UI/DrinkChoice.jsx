export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt}></img>
    </>
  );
};
