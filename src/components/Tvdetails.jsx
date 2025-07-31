import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtv } from '../store/actions/Tvactions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { removetv } from '../store/reducers/tvSlice';
import Loader from './Loader'
import HorizontalCards from './partials/HorizontalCards'

export const Tvdetails = () => {
const {pathname} = useLocation()
const {info}=  useSelector(state=>state.tv)
const navigate =  useNavigate()
console.log(info);


const {id}=useParams()
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(asyncloadtv(id));
    return ()=>{
      dispatch(removetv())
    }
  },[id])
  return info ? (
    <div  style={{
      
      background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
      backgroundPosition: 'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
  }} className='w-screen relative h-[210vh] px-[10%]  '>

      {/* part1 */}
      <nav className='w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-xl '>
     <Link onClick={()=>navigate(-1)} 
                className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></Link>

      <a target='_blank' href={info.detail.homepage}>
        <i className="ri-external-link-line"></i>
      </a>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
        <i className="ri-earth-fill"></i>
      </a>
      <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>

        
      </nav>

      

      {/* part2  poster and dettails*/}
      <div className='w-full flex '>
      <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mt-10 h-[43vh] object-cover   ' 
      src={`https://image.tmdb.org/t/p/original/${  info.detail.poster_path || info.detail.backdrop_path }`} alt="" />

       <div className='content ml-[5%] text-white'>
        <h1 className='text-5xl font-black  '>
          {info.detail.name || info.detail.original_title || info.detail.title || info.detail.original_name}

          <small className='text-xl font-bold text-zinc-300'>
            ({info.detail.first_air_date.split("-")[0]})
          </small>
          </h1>

          <div className='flex  items-center gap-x-5 mt-5 mb-5'>
          <span className=' rounded-full text-xl font-semibold bg-yellow-600  w-[6vh] h-[6vh] flex justify-center items-center '>
            {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className='w-[60px] font-bold text-2xl leading-6'>User Score</h1>
            <h1 className=''>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map(g=>g.name).join(",")}</h1>
            <h1>{info.detail.runtime}mins</h1>
          </div>

          <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>

          <h1 className='text-2xl mt-5 mb-3'>Overview</h1>
          <p>{info.detail.overview}</p>

          <h1 className='text-2xl mt-5 mb-3'>Tv Shows Translated in:</h1>
          <p className='mb-10'>{info.translations.join(", ")}</p>


          <Link className='mt-5 p-5   bg-[#6556CD] rounded-lg' to={`${pathname}/trailer`}><i className="ri-play-large-fill mr-2"></i> Play Trailer</Link>

          
          
       </div>

      </div>


        {/* Part-3 */}
      <div className='w-[80%]  flex flex-col  absolute left-[5%] top-[35%] gap-y-5'>
       
          {/* watchprovider for Logo */}
          {info.watchproviders && info.watchproviders.flatrate && 
              <div className='flex gap-x-5 items-center text-white'>
                  <h1>Available on Platform</h1>

                  {info.watchproviders.flatrate.map((w,i)=>(
               <img key={i}
               title={w.provider_name}
               className='w-[4vh] h-[4vh] object-fit mr-1 rounded-md   '
               src={`https://image.tmdb.org/t/p/original/${ w.logo_path}`} alt="" />
             ))}
                </div>}


              {info.watchproviders && info.watchproviders.rent && 
              <div className='flex gap-x-5 items-center text-white'>
                  <h1>Available on Rent</h1>

                  {info.watchproviders.rent.map((w,i)=>(
               <img key={i}
               title={w.provider_name}
               className='w-[4vh] h-[4vh] object-fit mr-1 rounded-md   '
               src={`https://image.tmdb.org/t/p/original/${ w.logo_path}`} alt="" />
             ))}
                </div>}
            
 
               {/* watchprovider for Purchasing a film */}
               {info.watchproviders && info.watchproviders.buy && 
              <div className='flex gap-x-5 items-center text-white'>
                  <h1>Available to Buy</h1>

                  {info.watchproviders.buy.map((w,i)=>(
               <img key={i}
                title={w.provider_name}
               className='w-[4vh] h-[4vh] object-fit mr-1 rounded-md   '
               src={`https://image.tmdb.org/t/p/original/${ w.logo_path}`} alt="" />
             ))}
                </div>}
       </div>


         {/* Part 4 Seasons */}
          <hr className='mt-10  mb-5 border-none h-[2px] bg-zinc-500' />

          <h1 className='text-3xl font-bold text-white'>Seasons</h1>
          
        <div className='w-[100%] h-[50vh] flex mb-5 mt-2 overflow-y-hidden p-5'>
          {info.detail.seasons.length>0? info.detail.seasons.map((s,i)=>(
            <div key={i} className='w-[15vh] mr-[10%] '>
               <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[13vw] h-[40 vh] object-cover' src={`https://image.tmdb.org/t/p/original/${ s.poster_path }`} alt="" />
            <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>
            {s.name || s.original_title || s.title || s.original_name}
            </h1>
            </div>
          )):<h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to Show</h1>}
       
        </div>


          {/* Part 5 recomendations */}
          <hr className='mt-10  mb-5 border-none h-[2px] bg-zinc-500' />

          <h1 className='text-3xl font-bold text-white'>Recommendations & Similar Stuff</h1>
          
        <HorizontalCards 
         data={info.recommendations.length>0 ? info.recommendations : info.similar}
        />
          <Outlet/>

    </div>
  ):(<Loader/>);
}

export default Tvdetails