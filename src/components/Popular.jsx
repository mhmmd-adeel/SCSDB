import axios from "../utils/Axios"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import Cards from "./partials/Cards"


const Popular = () => {
  document.title ="SCSDB | Popular "
    const navigate = useNavigate()
    const [category, setcategory] = useState("movie")
    const [popular, setpopular] = useState([])
    const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     const Getpopular = async()=>{
        try {
          const {data}= await axios.get(`${category}/popular?page=${page}`);
  
        if (data.results.length > 0){
          setpopular((prevState)=>[...prevState,...data.results]);
          setpage(page+1);

          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("error:",error)
          
        }
      };

      const refreshhndlr=()=>{
            if (popular.length===0){
                Getpopular()
            } else{
                setpage(1);
                 setpopular([])
                 Getpopular()
            }
      }
      

      useEffect(()=>{
        refreshhndlr()
      },[category])

      return popular.length > 0 ? (
        <div className='w-screen h-full '>
    
            <div className='w-full px-[5%] flex items-center justify-between overflow-x-hidden'>
                <h1  className='text-2xl font-semibold text-zinc-400'>
                <i onClick={()=>navigate(-1)} 
                    className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                    popular<small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>
                <div className='flex items-center w-[80%]'>
                <Topnav />
                <Dropdown title='Category' options={["movie","tv"]} func={(e)=> setcategory(e.target.value)}/>
                <div className='w-[2%]'></div>
                </div>
                
            </div>
    
        <InfiniteScroll
        loader={<h1>loading...</h1>}
        dataLength={popular.length}
        next={Getpopular}
        hasMore={hasMore}
        >
    
            <Cards data={popular} title={category}/>
        </InfiniteScroll>
    
    
          
        </div>
      ):(<Loader/>
      );
}

export default Popular
