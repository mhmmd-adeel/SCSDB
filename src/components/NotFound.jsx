import React from 'react'
import notfound from '/notfound.jpg'

const NotFound = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
    <img className='h-[40%] object-covver' src={notfound} alt="" />
  </div>
  )
}

export default NotFound

