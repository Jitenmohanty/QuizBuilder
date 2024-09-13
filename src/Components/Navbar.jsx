import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={`bg-slate-800 p-6 lg:p-4 text-white h-[4vw]  min-w-full flex justify-end items-center gap-8`}>
      
        <Link className='text-xl lg:text-sm' to="/">Home</Link>
        <Link  className='bg-blue-600 text-white text-xl lg:text-sm md:px-4 md:py-2 lg:py-2 lg:px-4 sm:py-1 sm:px-4    rounded-md' to="/create-quiz">+Create Quiz</Link>
    </div>
  )
}

export default Navbar
