export const Books = ({ amount, children }) => {
  return (
    <>
      <h2>Books ({amount}):</h2>
      {children}
    </>
  );
};
