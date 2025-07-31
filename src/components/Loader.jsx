import React from 'react'
import loader from '/loader.gif'

function Loader() {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'>
      <img className='h-[40vh] object-covver' src={loader} alt="" />
    </div>
  )
}

export default Loader
