import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center px-5 py-2">
        <div className='flex items-center gap-4'>
            <Link to="/" className="text-white text-lg font-semibold">
          College Code Platform
        </Link>
        <div className="text-white flex gap-4">
            <p className='hover:bg-gray-800 px-4 py-2 font-light rounded-lg '>Feature 1</p>
            <p className='hover:bg-gray-800 px-4 py-2 font-light rounded-lg '>Feature 2</p>
            <p className='hover:bg-gray-800 px-4 py-2 font-light rounded-lg '>Feature 3</p>
        </div>
        </div>
        <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-transparent text-white px-5 py-2 rounded cursor-pointer font-medium">Login</button>
            <button className=" hover:bg-gray-800 text-white px-4 py-2 rounded cursor-pointer font-medium">Signup</button>
          <Link to="/editor">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer font-medium">
              Go to Code Editor
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar