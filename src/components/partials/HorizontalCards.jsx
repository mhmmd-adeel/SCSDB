import React from 'react'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import noimage from "/noimage.jpeg";

const HorizontalCards = ({data}) => {
  
  
  return (
    


      <div className='w-[100%] h-[50vh] flex mb-5 mt-2 overflow-y-hidden p-5'>
        {data.length>0 ?  data.map((d,i)=>(
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[18%] mb-5 h-[40vh] mr-5 bg-zinc-900 '>
            <img className='w-full h-[50%]   object-cover' src={d.backdrop_path || d.poster_path ?
              `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`:noimage}
              alt="" />
            <div className='text-white p-3 h-[55%] overflow-y-auto'>
            <h1 className='text-sm  font-bold'>{d.name || d.original_title || d.title || d.original_name} </h1>
            <p className=' mt-2 mb-2 '>{d.overview.slice(0,40)}...<span className='text-zinc-500'>more</span></p>
            </div>
            
          </Link>
          )): <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to Show</h1>}
        
      </div>

  )
}

export default HorizontalCards;
