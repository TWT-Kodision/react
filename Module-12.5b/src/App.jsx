import { useRef } from "react";

export const App = () => {
  const helloRef = useRef(null);
  const topRef = useRef(null);

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div ref={topRef} className="fullscreen-height">
        <h1>Ref exercise starter</h1>
        <button onClick={() => executeScroll(helloRef)}>Click to scroll</button>
      </div>
      <div ref={helloRef} className="fullscreen-height lightblue-background">
        <h1>Hello</h1>
        <button onClick={() => executeScroll(topRef)}>Click to go back</button>
      </div>
    </>
  );
};
