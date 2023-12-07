import { useState } from "react";

const createInitialState = () => {
  const age = new Date().getFullYear() - 1992;
  return age;
};

const App = () => {
  const [version, setVersion] = useState(0);

  const handleVersionUp = () => {
    setVersion(version + 1);
  };

  const handleVersionDown = () => {
    setVersion(version - 1);
  };

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <p>version: {version}</p>
      <Person
        key={version}
        test={handleVersionUp}
        testDown={handleVersionDown}
      />
    </div>
  );
};

const Person = ({ test, testDown }) => {
  const [name, setName] = useState("No Name");
  const [age, setAge] = useState(createInitialState);

  const handleClick = () => {
    setName((n) => n + " o");
    setName((n) => n + " o");
    console.log({ name });
  };

  const handleClickBD = () => {
    setAge((a) => a + 1);
  };

  return (
    <>
      <p>{name}</p>
      <p>{age}</p>

      <button onClick={handleClick}>show the name</button>
      <button onClick={handleClickBD}>Birthday</button>
      <button onClick={test}>version up</button>
      <button onClick={testDown}>version down</button>
    </>
  );
};

export default App;
