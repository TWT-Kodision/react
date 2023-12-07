import { ComponentThatErrors2 } from "./ComponentThatErrors2";

export const ComponentThatErrors = () => {
  if (Math.random() < 0.5) {
    throw new Error("something went wrong!");
  }
  return (
    <div>
      <ComponentThatErrors2 />
    </div>
  );
};
