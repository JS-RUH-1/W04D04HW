import './Style.css'; 
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("anime")
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`https://kitsu.io/api/edge/${resourceType}?page[limit]=10&page[offset]=0`).then(res => {
      setItems(res.data.data);
    })

  }, [resourceType]);

  return <div>
    <button 
    className={resourceType === "manga" ? "selected" : ""} onClick={() => setResourceType("manga")}
    >Manga</button> - <button className={resourceType === "anime" ? "selected" : ""}  onClick={() => setResourceType("anime")}>Anime</button>
    <div className="grid-container">
    {items.map(item => <div>
      <h3>{item.attributes.canonicalTitle}</h3>
      <img src={item.attributes.posterImage.small} width="200px" />
    </div> )}
    </div>
    
  </div>;
}

export default App;
