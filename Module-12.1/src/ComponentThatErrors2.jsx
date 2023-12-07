export const ComponentThatErrors2 = () => {
  if (Math.random() < 0.5) {
    throw new Error("something went wrong 2!");
  }
  return <div>No error now.</div>;
};
