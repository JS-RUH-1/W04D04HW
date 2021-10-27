import { useEffect, useState } from 'react';
import Axios from 'axios'
import App from '../App.css';

function Fetch (){

    const [Type, setType] = useState("anime")
    const [items , setItems]= useState([])

    useEffect(()=>{
      
        Axios.get(`https://kitsu.io/api/edge//trending/${Type}`)
             .then((response) =>  {
            console.log(response)
            setItems(response.data.data)
        })

    
},[Type])

    return(
        <div>
        
        <button onClick={() => setType("anime")}>Anime</button>
        <button onClick={() => setType("manga")}>Manga</button>

        <div class="posters">
        {items.map(function(item, i){
            console.log('test');
            return (<div>
                <h3>{item.attributes.canonicalTitle}</h3>
                <img src={item.attributes.posterImage.medium} />
            </div>)
          })}
          </div>
        </div>
    )

}

export default Fetch