import React, { useEffect, useState } from 'react'
import axios from '../utils/Axios'
import Sidenav from './partials/Sidenav'
import Dropdown from './partials/Dropdown'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Loader from './Loader'
import Topnav from './partials/Topnav'
import Signinbtn from './Signinbtn'
import { useAuth } from './Authcontext'
 


function Home() {
    document.title="SCSDB | HOME"
    const [wallpaper, setwallpaper] = useState(null)
    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState("all")
    const {isAuthenticated}= useAuth()
    
 
  
    const Getwallpaperheader = async()=>{
      try {
        const {data}= await axios.get(`/trending/all/day`);
       let randomdata= data.results[( Math.random()*data.results.length).toFixed()]
        setwallpaper(randomdata)
      } catch (error) {
        console.log("error:",error)
        
      }
    };
    const Gettrending = async()=>{
      try {
        const {data}= await axios.get(`/trending/${category}/day`);
        settrending(data.results)
      } catch (error) {
        console.log("error:",error)
        
      }
    };
    // console.log(`/trending/${category}/day`);
        
    

    useEffect(()=>{
      Gettrending();
      !wallpaper && Getwallpaperheader();
    },[category])
   


    
  return wallpaper && trending? (
   <div className='flex w-screen h-screen bg-[#1F1E24]'>
    <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
      <div className='flex items-center mr-[6%]'>
        <Topnav /> 
        {/* {isAuthenticated? <h3>Hi,{}</h3> } */}
        <Signinbtn/>
      </div>
      <Header data={wallpaper} />
       
      <div className='p-10 flex justify-between'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>Trending</h1>
        <Dropdown title='Filter' options={['tv','movie','all']} func={(e)=>setcategory(e.target.value)} />
      </div>

      <HorizontalCards data={trending} />
    </div>
   </div>
  ):<Loader/>
}

export default Home
