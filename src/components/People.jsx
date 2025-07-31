import axios from "../utils/Axios"
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import Cards from "./partials/Cards"



const People = () => {
    document.title ="SCSDB | Tv Shows "
    const navigate = useNavigate()
    const [category, setcategory] = useState("popular")
    const [people, setpeople] = useState([])
    const [page, setpage] = useState(1)
     const [hasMore, sethasMore] = useState(true)

     const GetPeople = async()=>{
        try {
          const {data}= await axios.get(`/person/${category}?page=${page}`);
  
        if (data.results.length > 0){
          setpeople((prevState)=>[...prevState,...data.results]);
          setpage(page+1);

          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("error:",error)
          
        }
      };

      const refreshhndlr=()=>{
            if (people.length===0){
                GetPeople()
            } else{
                setpage(1);
                 setpeople([])
                 GetPeople()
            }
      }
      

      useEffect(()=>{
        refreshhndlr()
      },[category])

      return people.length > 0 ? (
        <div className='w-screen h-full '>
    
            <div className='w-full px-[5%] flex items-center justify-between'>
                <h1  className='text-2xl font-semibold text-zinc-400'>
                <i onClick={()=>navigate(-1)} 
                    className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                    People
                </h1>
                <div className='flex items-center w-[80%]'>
                <Topnav />
                <div className='w-[2%]'></div>
                </div>
                
            </div>
    
        <InfiniteScroll
        loader={<h1>loading...</h1>}
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        >
    
            <Cards data={people} title="people"/>
        </InfiniteScroll>
    
    
          
        </div>
      ):(<Loader/>
      );
    
}

export default People
