import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Try.css'

let newMap;

function Anime() {// start of function
  
    const [word ,setWord] = useState('anime');
    const [data,setDate]= useState([]);


 useEffect(()=>{
     
axios.get(`https://kitsu.io/api/edge//trending/${word}`)

.then((res)=>{ console.log(res.data.data)
 
    setDate(res.data.data)
    
     
})
.catch(error=> console.log(error));


},[word])

    return(//start return

<div class='Btn'> 

<button onClick={()=>setWord("anime")}>Anime</button>
<button onClick={()=>setWord("manga")}>Manga</button>

 
<div class="arr"> 
  {data.map((item) =>

            <div class='IMG'>
           <h2>   {item.attributes.titles.en_jp}</h2>
         <img src={item.attributes.posterImage.small} alt='' width={100}/>
          </div>
)
}
</div>
</div>

 

    );//end of return
}//end of function
export default Anime;