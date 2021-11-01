import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("Manga");
  const [array, setarray] = useState([]);

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge//trending/${name}`)
      .then((Response) => {
        console.log(Response.data.data);
        setarray(Response.data.data);
      })
      .catch((e) => {
        console.log("error: " + e);
      });
  }, [name]);

  function type(event) {
    const name = event.target.value;
    setName(name);
  }
  return (
    <div>
      <div className="App">
        <h1>{name}</h1>
        <button onClick={type} value="Manga">
          Manga
        </button>
        <button onClick={type} value="Anime">
          Anime
        </button>
      </div>
      <div className="content">
        {array.map((elemnts) => (
          <div className="card">
            <div className="container">
              <img src={elemnts.attributes.posterImage.original} alt="Avatar" />
              <h4>
                <b>{elemnts.attributes.canonicalTitle}</b>
              </h4>
              <p>Rank:{elemnts.attributes.popularityRank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
