import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../Authcontext.jsx'

const Trailer = ({ user }) => {
    const {pathname}=useLocation()
    const category= pathname.includes("movie")? "movie" : "tv";
   const ytvideo= useSelector((state)=>state[category].info.videos)
   const trailer = ytvideo.results.find(video => video.type.toLowerCase().includes("trailer"));
   const navigate =useNavigate()
  const {isAuthenticated}= useAuth()
   
   

   
  
  return (


 <div 
    className='bg-[rgba(0,0,0,.9)] absolute top-0 left-0 z-[100] w-screen h-screen flex items-center justify-center'>
        <Link onClick={()=>navigate(-1)} 
                className="absolute hover:text-[#6556CD] mr-2 ri-close-fill text-5xl text-white right-[5%] top-[5%]"></Link>
   { isAuthenticated && trailer  ? (
     
     <ReactPlayer
     height={600}
     width={1200}
     url={`https://www.youtube.com/watch?v=${trailer.key}`} controls playing />
) : (
  <p className='text-zinc-500 font-bold text-5xl font-black '>Trailer Not Found!</p> && 
  <p className='text-zinc-500 font-bold text-5xl font-black '>Login, to watch Trailer!!</p>
)}
    </div> 
  )
}

export default Trailer


