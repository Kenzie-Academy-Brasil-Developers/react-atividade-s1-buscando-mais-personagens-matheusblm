import react from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./Components/Characters";
import CharCard from "./Components/CharCard";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);
  const nextPage = () => {
    setNext(next + 1);
  };
  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  return (
    <div className="App-header">
      <div className="buttons">
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
