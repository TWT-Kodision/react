export const Category = ({ amount, title, children }) => {
  return (
    <>
      <h3>
        {title} ({amount}):
      </h3>
      {children}
    </>
  );
};
