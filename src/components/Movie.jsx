import axios from "../utils/Axios"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import Cards from "./partials/Cards"

const Movie = () => {
    document.title ="SCSDB | movie "
    const navigate = useNavigate()
    const [category, setcategory] = useState("now_playing")
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     const Getmovie = async()=>{
        try {
          const {data}= await axios.get(`/movie/now_playing?page=${page}`);
  
        if (data.results.length > 0){
          setmovie((prevState)=>[...prevState,...data.results]);
          setpage(page+1);

          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("error:",error)
          
        }
      };

      const refreshhndlr=()=>{
            if (movie.length===0){
                Getmovie()
            } else{
                setpage(1);
                 setmovie([])
                 Getmovie()
            }
      }
      

      useEffect(()=>{
        refreshhndlr()
      },[category])

  return movie.length > 0 ? (
    <div className='w-screen h-full '>

        <div className='w-full px-[5%] flex items-center overflow-x-hidden justify-between'>
            <h1  className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} 
                className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                movie<small className="ml-2 text-sm text-zinc-600">({category})</small>

            </h1>
            <div className='flex items-center w-[80%]'>
            <Topnav />
            <Dropdown title='Category' options={["popular","top_rated","upcoming","now_playing"]} func={(e)=> setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
            </div>
            
        </div>

    <InfiniteScroll
    loader={<h1>loading...</h1>}
    dataLength={movie.length}
    next={Getmovie}
    hasMore={hasMore}
    >

        <Cards data={movie} title="movie"/>
    </InfiniteScroll>


      
    </div>
  ):(<Loader/>
  );
}

export default Movie
