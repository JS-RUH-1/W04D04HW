import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resourcetype, setResourceType] = useState("anime");
  const [arr, setArr] = useState([]);

  const fetchAPI = async (url) => {
    //fetch the API
    const res = await axios.get(`https://kitsu.io/api/edge//trending/${url}`);
    //save
    setArr(res.data.data);
  };
  useEffect(() => {
    //check if anime call anime API otherwise  manga
    resourcetype == "anime" ? fetchAPI("anime") : fetchAPI("manga");
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
        
        {  arr.map((i) => (
            <div className="mycon">
              <img
                src={i.attributes.posterImage.original}
                width={300}
                height={300}
                style={{ borderRadius: 10 }}
              />
              <h4>{i.attributes.canonicalTitle}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
