import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={`bg-slate-800 p-4 text-white h-[4vw] min-w-full flex justify-end items-center gap-8`}>
        <Link to="/">Home</Link>
        <Link  className='bg-blue-600 text-white lg:py-2 lg:px-4 sm:py-1 sm:px-2 sm:rounded-sm rounded-md' to="/create-quiz">+Create New Quiz</Link>
    </div>
  )
}

export default Navbar
