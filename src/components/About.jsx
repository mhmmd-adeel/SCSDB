
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-screen p-[2%] '>
        <h1  className='text-2xl font-semibold text-zinc-400'>
                <i onClick={()=>navigate(-1)} 
                    className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                    About Us
                </h1>


                <div className=' text-zinc-400  h-full flex flex-col p-[5%] w-[80%]'>
                    <p className=' text-2xl font-semibold items-center justify-center'>Welcome to <strong>SCSDB</strong>, your number one source for all things movies. We're dedicated to giving you the latest and greatest in film reviews, trending movies, and entertainment news, with a focus on reliability, accuracy, and up-to-date information.
                    </p>

                    <p className='mt-5 text-2xl  font-semibold items-center justify-center'>
                    Founded in 2011, <strong>SCSDB</strong> has come a long way from its beginnings as a simple movie catalog. Our goal is to create a comprehensive platform for movie enthusiasts where you can find information on popular, recent, and top-rated films with just a click.
                    </p>

                    <p className='mt-5 text-2xl  font-semibold items-center justify-center'>
                    We are passionate about cinema, and our mission is to help people discover new movies and explore a vast range of genres. Whether you're looking for classic films or the latest releases, we've got you covered.
                    </p>

                    <p className='mt-5 text-2xl  font-semibold items-center justify-center'>
                    Thank you for visiting <strong>SCSDB</strong>. We hope you enjoy our website as much as we enjoy bringing it to you!</p>
                </div>
      
    </div>
  )
}

export default About
