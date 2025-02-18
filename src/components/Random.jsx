import React from 'react'
import useGif from '../Hooks/useGif'
import { useEffect } from 'react';
import Spinner from './Spinner';

function Random() {
   const{gif,loading,fetchGif}=useGif();

   useEffect(()=>{
      fetchGif();
   },[])

   function clickHandler(){
      fetchGif();
   }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'><u>A RANDOM GIF</u></h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="Random Gif" />}

      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}

export default Random
