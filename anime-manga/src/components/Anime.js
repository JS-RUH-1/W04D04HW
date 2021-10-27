import React, { useEffect, useState } from "react";
import Axios from "axios";

function Anime() {
  const [resource, setResource] = useState("anime");
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get(`https://kitsu.io/api/edge//trending/${resource}`).then(
      (response) => {
        console.log(response.data.data[0]);
        // setItems(response.data.data[0])
        // let arr = response.data.data;
        setItems(response.data.data);
        console.log("items = ", items[0]);
      }
    );
  }, [resource]);

  return (
    <div>
      <button onClick={() => setResource("anime")}>Anime</button>
      <button onClick={() => setResource("manga")}>Manga</button>
      <div id="cont">
        {items.map((e) => (
          <div>
            <p>{e.attributes.canonicalTitle}</p>
            <img src={e.attributes.posterImage.small} alt="" />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anime;
