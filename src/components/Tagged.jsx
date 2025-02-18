import React from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif'
import {useState} from 'react';
import { useEffect } from 'react';

function Tagged() {
   const{gif,loading,fetchGif}=useGif();
   const [tag,setTag] = useState('car');

   function changeHandler(e){
      setTag(e.target.value);
   }

   function enterHandler (e){
      if(e.key==='Enter'){
         clickHandler();
      }
   }

   function clickHandler(){
      fetchGif(tag);
   }

   useEffect(()=>{
      fetchGif(tag);
   },[])

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" alt="Random Gif" />}

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' type="text" onKeyDown={enterHandler} onChange={changeHandler} value={tag} placeholder='Enter Gif Genere..' />

      <button onClick={clickHandler}  className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}

export default Tagged
