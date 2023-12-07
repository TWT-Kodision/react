import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [name, setName] = useLocalStorage("name", "John");
  const [subject, setSubject] = useLocalStorage("subject", "React Hooks");

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <h2>welcome {name}</h2>
      <label>Current Subject:</label>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} />
    </div>
  );
};

export default App;
