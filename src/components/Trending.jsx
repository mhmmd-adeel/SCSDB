import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/Axios'
import Cards from './partials/Cards'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState([])
    const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)
     document.title ="SCSDB | Trending"

    const Gettrending = async()=>{
        try {
          const {data}= await axios.get(`/trending/${category}/${duration}?page=${page}`);
  
        if (data.results.length > 0){
          settrending((prevState)=>[...prevState,...data.results]);
          setpage(page+1);

          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("error:",error)
          
        }
      };

      const refreshhndlr=()=>{
            if (trending.length===0){
                Gettrending()
            } else{
                setpage(1);
                 settrending([])
                 Gettrending()
            }
      }
      

      useEffect(()=>{
        refreshhndlr()
      },[category, duration])
      

  return trending.length > 0 ? (
    <div className='w-screen h-full '>
        <div className='w-full px-[5%] flex items-center justify-between'>
            <h1  className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} 
                className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                Trending<small className="ml-2 text-sm text-zinc-600">({category})</small>
            </h1>
            <div className='flex items-center w-[80%]'>
            <Topnav />
            <Dropdown title='Category' options={["movie","tv","all"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            <Dropdown title='Duration' options={["week","day"]} func={(e)=>setduration(e.target.value)}/>
            </div>
            
        </div>

    <InfiniteScroll
    loader={<h1>loading...</h1>}
    dataLength={trending.length}
    next={Gettrending}
    hasMore={hasMore}
    >

        <Cards data={trending} title={category}/>
    </InfiniteScroll>


      
    </div>
  ):(<Loader/>
  );
}

export default Trending
