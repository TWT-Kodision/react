import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([
    {
      quote:
        "My biggest fear is that people will attribute fake quotes to me and millions of morons on the internet will believe it.",
      name: "Albert Einstein",
    },
  ]);
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuotes((quotes) => [{ quote, name }, ...quotes]);
    setQuote("");
    setName("");
  };

  console.log({ quotes });
  return (
    <div className="App">
      <h1>Our beautiful form will be here:</h1>
      <h1>Quotes:</h1>
      <p>{quote}</p>

      <form onSubmit={handleSubmit}>
        <textarea value={quote} onChange={handleChangeQuote}></textarea>
        <input value={name} onChange={handleChangeName}></input>
        <button type="submit">Add Quote</button>
      </form>

      <div className="quote">
        <h2>Famous Quotes:</h2>
        {quotes.map((quote) => {
          return (
            <div className="quote" key={quote.quote}>
              <p>{quote.quote}</p>- <span>{quote.name}</span>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
