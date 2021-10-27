import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resourcetype, setResourceType] = useState("anime");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchAPI = async (url) => {
      const res = await axios.get(url);
      let title = res.data.data.map((e) => e.attributes.abbreviatedTitles);
      let image = res.data.data.map((e) => e.attributes.posterImage);
      console.log(res.data.data);
      title = title.map((i) =>
        i[0] != undefined ? i[0] : "Title not supported"
      );

      image = image.map((i) => i != null && i.original);

      let result = [];
      for (let i = 0; i < title.length; i++) {
        result.push({
          title: title[i],
          image: image[i],
        });
      }
      setArr(result);
    };
    //check if anime call anime func otherwise call get manga func
    resourcetype == "anime"
      ? fetchAPI("https://kitsu.io/api/edge/anime")
      : fetchAPI("https://kitsu.io/api/edge/manga");
  }, [resourcetype]);

  return (
    <div className="App">
      <button onClick={() => setResourceType("anime")}>Anime</button>
      <button onClick={() => setResourceType("manga")}>Manga</button>

      {arr.map((i) => (
        <div>
          <h4>{i.title}</h4>,
          <img src={i.image} width={200} height={200} />
        </div>
      ))}
    </div>
  );
}

export default App;
