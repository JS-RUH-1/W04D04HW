import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function Trending (){
    
    const [type, setType]= useState("Anime");
    const [items, setItems]= useState([]);

    function fetchAnime (){



        axios.get(`https://kitsu.io/api/edge/trending/${type}`)
        .then(function(response){

            let fetchData = response.data.data;
            let Array = [];
            fetchData.forEach(element => {
                Array.push([element.attributes.canonicalTitle, element.attributes.posterImage.large])
            });
            setItems(Array);

       })
   } 

   useEffect(()=>{
    fetchAnime();
   },[type]);


   return (
       
       <div className= "style"><br/>
            <button onClick ={()=>setType("Anime")}>Anime</button>
            <button onClick ={()=>setType("Manga")}>Manga</button>
            <br/><br/>

            <div className= "content">
                {items.map(function(item) {
                if (item){
                    return (
                        <div>
                            <h3>{item[0] || "No Name"}</h3>
                            <img src = {item[1]} width={200} height={200}></img>
                        </div>
                    )}
                }
                )}
            </div>
        </div>
  )


}


export default Trending;