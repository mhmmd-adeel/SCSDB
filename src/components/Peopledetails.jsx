import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadpeople } from '../store/actions/Personaction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { removepeople } from '../store/reducers/peopleSlice';
import Loader from './Loader'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown';

const Peopledetails = () => {
  const {pathname} = useLocation()
const {info}=  useSelector(state=>state.people)
const navigate =  useNavigate()
console.log(info);
const [category, setcategory] = useState("movie")


const {id}=useParams()
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(asyncloadpeople(id));
    return ()=>{
      dispatch(removepeople())
    }
  },[id])
  return info? (
    <div className='px-[10%] w-screen h-[200vh] bg-[#1F1E24]'>
       {/* part1 */}
       <nav className='h-[10vh] w-full items-center text-zinc-100 flex gap-10 text-xl '>
     <Link onClick={()=>navigate(-1)} 
                className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></Link>
      </nav>


        <div className='w-full flex '>
          {/* part-2 left poster & details */}
          <div className='w-[30%]'>
          <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  h-[35vh] object-cover   ' 
            src={`https://image.tmdb.org/t/p/original/${
            info.detail.profile_path  }`}
             alt="" />
             <hr className='mt-6 w-[45%]  mb-5 border-none h-[2px] bg-zinc-500' />

             {/* part-3 social media Links */}
             <div className='text-2xl text-white flex gap-x-5  '>
           
                  <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                  <i className="ri-earth-fill"></i>
                  </a>
                  <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
                  <i className="ri-facebook-circle-fill"></i>
                  </a>
                  <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
                  <i className="ri-instagram-fill"></i>
                  </a>
                  <a target='_blank' href={`https://twitter.com/${info.externalid.twitter_id}`}>
                  <i className="ri-twitter-x-fill"></i>
                  </a>
             </div>

             {/* Personal info */}
             <h1 className='text-2xl text-zinc-400 my-5 font-semibold'>Personal Information</h1>
             <h1 className='text-lg text-zinc-400 font-semibold'>Known For</h1>
             <h1 className=' text-zinc-400  '>{info.detail.known_for_department}</h1>

             <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Gender</h1>
             <h1 className=' text-zinc-400  '>{info.detail.gender == 2? "Male" : "Female"}</h1>


             <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Death day</h1>
             <h1 className=' text-zinc-400  '>{info.detail.deathday ?  info.detail.deathday : "Alive"}</h1>

             <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Place of Birth</h1>
             <h1 className=' text-zinc-400  '>{info.detail.place_of_birth}</h1>

             <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Also Known As</h1>
             <h1 className=' text-zinc-400  '>{info.detail.also_known_as.join(",")}</h1>
          </div>


        {/* part-3 right details and info */}
        <div className='w-[70%] '>
          <h1 className='text-5xl text-zinc-400 my-5 font-black'>{info.detail.name}</h1>
          <h1 className='text-xl text-zinc-400 font-bold'>Biography</h1>
          <p className='text-zinc-400 mt-2' >{info.detail.biography}</p>

          <h1 className='text-lg text-zinc-400 font-bold mt-5'>Known For</h1>
          <HorizontalCards data={info.combinedcredits.cast} />

          <div className='w-full flex justify-between'>
          <h1 className='text-xl mt-5 text-zinc-400 font-semibold mt-3'>Acting</h1>
          <Dropdown title= "category" options={["tv","movie"]}   func={(e)=>setcategory(e.target.value)}/>
          </div>
          
            
            <div 
            className='list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] mt-5 border-2 border-zinc-700 p-5'>

                {info[category + "credits"].cast.map((c,i)=> (
                     <li key={i} className='hover:text-white duration-300 cursor-pointer'>
                     <Link to={`/${category}/details/${c.id}`} className=''>
                       <span className=''>
                        {" "}
                       {c.name ||
                        c.original_title || 
                        c.title || 
                        c.original_name}
                       </span>
                       <p className='mb-3'>
                        {c.character && 
                                `Character Name: ${c.character}`}
                        </p>
                     </Link>
                     
                   </li>
     
                ))}

            
            </div>
        </div>

        </div>


    </div>
  ):(<Loader/>);
}

export default Peopledetails


{/* */}
