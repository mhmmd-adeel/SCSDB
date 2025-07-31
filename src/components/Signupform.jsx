import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from './Authcontext.jsx'

const Signupform = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();
  const { signup } = useAuth();

  const registerSubmit = async(e) => {
    e.preventDefault();
   signup(email,password)
  //  login(email,password)
   const user = auth.currentUser;
   if (user) {
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      name: name,
    }); 
   
  }
   navigate("/")
  }
  
  return (
    <div className='w-screen h-screen  relative'>
    <div onClick={()=>navigate("/")} 
                 className="absolute hover:text-[#6556CD] mr-2 ri-close-fill text-5xl text-white left-[5%] top-[5%]"></div>
    <div className='w-screen h-full flex flex-col justify-center items-center '>
        <h1 className='text-5xl  text-white font-bold '>Sign Up</h1>
        <form 
          onSubmit={registerSubmit}
          className='flex w-[50%] flex-col mt-[4%] items-center gap-y-7 text-white ' >
            <input 
            className='input-field ' 
            type="text" 
            placeholder='Your Name' 
            required
            onChange={(e) => setname(e.target.value)}/>
            
            

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
              value='Sign Up' />
        </form>
       

        <div className='w-screen absolute bottom-5 '>
            <p className='text-zinc-400  text-center text-[1rem]' > Already have an account? 
              <Link  to='/Signin' 
              className='ml-3 text-[#6556CD] font-semibold'
              >Sign in</Link></p>
        </div>
     </div>
    </div>
  )
}

export default Signupform