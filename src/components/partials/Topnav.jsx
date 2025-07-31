import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpeg';
import axios from '../../utils/Axios';

const Topnav = () => {
  const [query, setQuery] = useState('');
  const [searches, setsearches] = useState([]);
  const Getsearches= async()=>{
    try {
      const {data}= await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results)
    } catch (error) {
      console.log(error)
      
    }
  };


  

  useEffect(()=>{
    Getsearches();
    
  },[query]);

  return (
    <div className='w-[80%] h-[10vh] relative flex z-[100] items-center  mx-auto sm:w-[50%]  '>
      <>
      <i className="text-zinc-400 text-3xl cursor-pointer hover:text-white ri-search-line"></i>
      <input onChange={(e)=>setQuery(e.target.value)}
      value={query}
      className='w-[50%] text-zinc-200 font-semibold p-5 text-xl mx-10 overflow-hidden outline-none border-none bg-transparent' type="text" placeholder='Search Anything'/>
      {query.length > 0 && <i onClick={()=>setQuery("")} className="text-zinc-400 text-3xl  cursor-pointer hover:text-white right-0 ri-close-fill"></i>}
       
       
      </>  
     

      <div className='absolute top-[100%] w-[50%] max-h-[50vh] bg-zinc-200 left-[5%] overflow-auto '>

          {searches.map((s,i)=>(
            < Link to={`/${s.media_type}/details/${s.id}`}
             key={i} 
            className='inline-block text-zinc-600 font-semibold hover:text-black duration-300 hover:bg-zinc-300 w-[100%] p-10 flex justify-start border-b-2 border-zinc-100  items-center overflow-hidden'>
          <img
          className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg'
          src={s.backdrop_path || s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage} alt="" />
          <span>{s.name || s.original_title || s.title || s.original_name}</span>
        </Link>))}
        
        
      </div>
    </div>
  )
}

export default Topnav
