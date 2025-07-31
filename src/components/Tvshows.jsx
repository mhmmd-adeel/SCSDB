import axios from "../utils/Axios"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import Cards from "./partials/Cards"



const Tvshows = () => {

    document.title ="SCSDB | Tv Shows "
    const navigate = useNavigate()
    const [category, setcategory] = useState("airing_today")
    const [tvshows, settvshows] = useState([])
    const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     const Gettvshows = async()=>{
        try {
          const {data}= await axios.get(`/tv/${category}?page=${page}`);
  
        if (data.results.length > 0){
          settvshows((prevState)=>[...prevState,...data.results]);
          setpage(page+1);

          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("error:",error)
          
        }
      };

      const refreshhndlr=()=>{
            if (tvshows.length===0){
                Gettvshows()
            } else{
                setpage(1);
                 settvshows([])
                 Gettvshows()
            }
      }
      

      useEffect(()=>{
        refreshhndlr()
      },[category])


  return tvshows.length > 0 ? (
    <div className='w-screen h-full overflow-x-hidden'>

        <div className='w-full px-[5%] flex items-center justify-between'>
            <h1  className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} 
                className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                Tv Show<small className="ml-2 text-sm text-zinc-600">({category})</small>
            </h1>
            <div className='flex items-center w-[80%]'>
            <Topnav />
            <Dropdown title='Category' options={["on_the_air","popular","top_rated","airing_today"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            </div>
            
        </div>

    <InfiniteScroll
    loader={<h1>loading...</h1>}
    dataLength={tvshows.length}
    next={Gettvshows}
    hasMore={hasMore}
    >

        <Cards data={tvshows} title="tv"/>
    </InfiniteScroll>


      
    </div>
  ):(<Loader/>
  );
}

export default Tvshows
