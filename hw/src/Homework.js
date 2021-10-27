import React, { useState, useEffect } from 'react';
import './Homework.css'

const axios = require('axios');


function Homework (){
    const [resourceType, setResourceType] = useState("Anime");
    const [items, setItems] = useState([]);

    function fetchAnimeAPI (){
        axios.get(`https://kitsu.io/api/edge/trending/${resourceType}`)
        .then(function (response) {
            let fetchedData = response.data.data;
            let arr = [];
            fetchedData.forEach(element => {
                arr.push([element.attributes.canonicalTitle, element.attributes.posterImage.large])
            });
            //fetchedData.map((element, key) => { arr.push(element) })
            setItems(arr);
        })
    }

    useEffect(() => {
        fetchAnimeAPI();
      }, [resourceType]);

    return (
        <div>
            <button className="buttons" onClick={ () => setResourceType("Anime")}>Anime</button>
            <button onClick={ () => setResourceType("Manga")}>Manga</button>
            <br></br>
            <div className="content">
            


                <br></br>
                {items.map(function(item, key, array) {
                    if ( item ){
                        return (
                            <div>
                                <h4>{item[0] || "No Name"}</h4>
                                <br></br>
                                <img src={item[1]} width={240} height={240}></img>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Homework