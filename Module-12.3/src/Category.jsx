export const Category = ({ amount, title, children }) => {
  console.log({ children });
  return (
    <>
      <h3>
        {title} ({amount}):
      </h3>
      {children}
    </>
  );
};
