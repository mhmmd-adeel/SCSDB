import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from './Authcontext.jsx'


const LoginForm = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const { login } = useAuth();
    const   handleSubmit =(e)=>{
        e.preventDefault();
        login(email,password)
        navigate('/')
    }
  return (
    
 <div className='w-screen h-screen  relative'>
   <div onClick={()=>navigate("/")} 
                className="absolute hover:text-[#6556CD] mr-2 ri-close-fill text-5xl text-white left-[5%] top-[5%]"></div>
    <div className='w-screen h-full flex flex-col justify-center items-center  top-0'>
        <h1 className='text-5xl mb-6 text-white font-bold '>Log In</h1>
        <form 
          onSubmit={handleSubmit}
          className='flex w-[50%] flex-col mt-[2%] items-center gap-y-7 text-white'>
            <input 
            className='input-field ' 
            type="email" 
            placeholder='Email' 
            required
            onChange={(e) => setemail(e.target.value)}/>

            <input 
            className='input-field ' 
            type="password" 
            placeholder='Password'
            required 
            onChange={(e) => setpassword(e.target.value)}/>

            <input 
            className='px-4 py-3 bg-[#6556CD] hover:bg-[#271b7a] ease-out  w-[50%]  cursor-pointer rounded-3xl text-white font-semibold text-lg'
            type="submit" 
                  value='Log In' />
        </form>

        <div className='w-screen absolute bottom-[8%] '>
            <p className='text-zinc-400  text-center text-[1rem]' > Don't have an account? 
              <Link  to='/Signup' 
              className='ml-3 text-[#6556CD] font-semibold'
              >Sign up</Link></p>
        </div>
    </div>
 </div>
  )
}

export default LoginForm