import React from "react";
import {useState} from 'react';


const API_KEY = `kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(){
   const [gif,setGif] = useState('');
   const [loading,setLoading]=useState(false);


   async function fetchGif(Tag){
      try{
         setLoading(true);
         const response = await fetch(Tag ? `${url}&tag=${Tag}` : url);
         const data = await response.json();

         console.log(data);

         if (data?.data?.images?.downsized_large?.url) {
            setGif(data.data.images.downsized_large.url);
         } else {
            console.error("Invalid response structure", data);
         }

         

         setLoading(false);
      }
      catch(e){
         console.error(e);
         setLoading(false);
      }
   }

   return {gif,loading,fetchGif};
}

export default useGif;