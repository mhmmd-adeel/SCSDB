import React, { useState } from 'react'
import { useAuth } from './Authcontext.jsx';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Signinbtn = () => {
  const { isAuthenticated,  logout } = useAuth();
  const navigate = useNavigate();
  const  handleLogout=()=>{
    logout();
    navigate("/")
  }
  return (
    <div>
        {isAuthenticated? ( <button onClick={handleLogout}
               className='px-4 py-2 bg-red-600 rounded text-white font-semibold text-lg'>
                    Logout
               </button>):
            (<Link
             to='/signup'
              className='px-4 py-2 bg-[#6556CD] rounded text-white font-semibold text-lg'>
                 Sign-up
            </Link>)}
      
       
    </div>
  )
}

export default Signinbtn