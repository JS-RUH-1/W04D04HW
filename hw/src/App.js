import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resourcetype, setResourceType] = useState("anime");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchAPI = async (url) => {
      const res = await axios.get(url);
      //store the fetched data into array : title & image
      let title = res.data.data.map((e) => e.attributes.canonicalTitle);
      let image = res.data.data.map((e) => e.attributes.posterImage);
      //check if image is null
      image = image.map((i) => i != null && i.original);
      //create array to make array of objects
      let result = [];
      //pushing the elment in array of object EX: {title:test,image:tst.jpg}
      for (let i = 0; i < title.length; i++) {
        result.push({
          title: title[i],
          image: image[i],
        });
      }
 
      // set the result in arr
      setArr(result);
    };
    //check if anime call anime func otherwise call get manga func
    resourcetype == "anime"
      ? fetchAPI("https://kitsu.io/api/edge//trending/anime")
      : fetchAPI("https://kitsu.io/api/edge//trending/manga");
    
  }, [resourcetype]);

  return (
    <div>
      <div className="App">
        <h1> React Fetch using AXIOS</h1>
        <div>
          <button className="btn" onClick={() => setResourceType("anime")}>
            Anime
          </button>
          <button className="btn" onClick={() => setResourceType("manga")}>
            Manga
          </button>
        </div>
      </div>
      <div className="container">
        {arr.map((i) => (
          <div className="mycon">
            <img
              src={i.image}
              width={300}
              height={300}
              style={{ borderRadius: 10 }}
            />
            <h4>{i.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
