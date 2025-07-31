import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-screen p-[2%] overflow-hidden'>
    <h1  className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} 
                className="hover:text-[#6556CD] mr-2 ri-arrow-left-line"></i> 
                Contact Us
            </h1>

            <div className='w-full h-full flex flex-col 
                p-[5%] w-[70%] text-zinc-400'>
                <p className='text-3xl font-semibold '>
                    At <strong>SCSDB</strong> we value your feedback and inquiries. </p>
                     <p className='text-3xl font-semibold mt-2' >Feel free to reach out to us through any of the following means:</p>
               
            <p className='text-3xl font-semibold my-10 '>
                <pre>Email:
                    <br />
                        <span className='px-10'>support@scsdb.com</span> 
                </pre>

                    <br />
                    <pre>
                    Phone:
                    <br />
                    <span className='p-10'>+1-234-567-890 </span> 
                    </pre>
                     
                    <br />
                    <pre>
                    Address:
                    <br />
                    <span className='p-10 '>
                        123 Movie Lane,
                        Cinema City,
                        Film Country, 12345
                    </span>
                        
                    </pre>
                </p>        
                
            </div>
    </div>
  )
}

export default Contact
