import { useState, useEffect } from "react";
import axios from "axios";

function Kitsu() {
  const [resourceType, setRT] = useState("anime");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge//trending/${resourceType}`)
      .then((response) => {
        setItems(response.data.data);
        console.log("kitsu stuffy", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [resourceType]);

  return (
    <div>
      <button id={resourceType=='anime'?'anime':'manga'} onClick={() => setRT("anime")}>Anime</button>
      <button id={resourceType=='anime'?'manga':'anime'} onClick={() => setRT("manga")}>Manga</button>
      <ul id="kitsu">
        {items.map((e) => (
          <div id="card">
            <h3 class={"title_"+resourceType}>{e.attributes.canonicalTitle}</h3>
            <img class="poster" src={e.attributes.posterImage.small} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Kitsu;
