import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';


function Display() {
  const [resourceType, setResourceType] = useState("anime");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://kitsu.io/api/edge//trending/${resourceType}`)
      .then((res) => {
      console.log(res.data);
      setItems(res.data.data);
    //   console.log(items);

      });
  }, [resourceType]);

  return (
    <div>
      <button id="anime" onClick={(() => setResourceType("anime"))}>anime</button>
      <button id="manga" onClick={(() => setResourceType("manga"))}>manga</button>
<div class="items">
             {items.map((item) => 
            <div >          
            <h3>{item.attributes.canonicalTitle}</h3>
            <img src={item.attributes.posterImage.small} width="200"  alt=""/>
            </div>
             )}
     </div>
    </div>
  );
}

export default Display;
