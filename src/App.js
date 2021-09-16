import react from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [link, setLink] = useState(
    `https://rickandmortyapi.com/api/character?page=`
  );

  useEffect(() => {
    if (link !== null) {
      fetch(`${link}`)
        .then((response) => response.json())
        .then((response) => {
          setCharacterList([...characterList, ...response.results]);
          setLink(response.info.next);
        });
    }
  }, [characterList, link]);

  return (
    <div className="App-header">
      <div className="buttons"></div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
