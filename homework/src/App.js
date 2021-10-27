import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
let show;
function App() {
  const [resourceType ,setResourceType] = useState("anime")
  const [items ,setItems] = useState([])


 useEffect(()=>{
  //const getPost = () =>{
    axios 
    .get(`https://kitsu.io/api/edge//trending/${resourceType}`)
    .then(res => {
      console.log(res.data.data)
      setItems(res.data.data)
      
    }  )/*.attributes.coverImage.large */
    .catch(err => console.log(err))
   
 // }
 },[resourceType])
  return (
    <div className="App">
     <button onClick={e => setResourceType("anime")}>anime</button> 
     <button onClick={e => setResourceType("manga")}>manga</button>
     <div className="flex">

   {  items.map((x) => {
        console.log(x)
        return (
          <div className="cards">
            <img src={x.attributes.coverImage.large}></img>
            <p>{x.attributes.titles.en}</p>
            
          </div>
        
        );
  
      })}
      </div>
    </div>
  );
}

export default App;
