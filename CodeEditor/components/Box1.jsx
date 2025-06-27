import React from 'react'
import { Link } from 'react-router-dom'
const Box1 = () => {
  return (
    <div>
        <p className='text-yellow-500 text-3xl'>Your personal Code editor</p>
        <h1 className='text-4xl font-semibold mt-5'>Your Code editor: Code and solve easily</h1>
        <p className='text-2xl text-gray-700 mt-5'>Get step by step help in each coding task.</p>
        <p className='text-2xl text-gray-700 mt-2'>Get help in your python assignments and projects.</p>

        <p className='text-3xl font-semibold underline decoration-amber-300 underline-offset-4 mt-5'>How it starts?</p>
        <p className='text-xl m-2 text-gray-700' ><i className="ri-checkbox-blank-circle-fill "></i> Click on the editor button</p>
        <p className='text-xl m-2 text-gray-700' ><i className="ri-checkbox-blank-circle-fill"></i> Write your code</p>
        <p className='text-xl m-2 mb-10 text-gray-700' ><i className="ri-checkbox-blank-circle-fill"></i> Get instant feedback</p>
        <Link to="/editor" className="px-4 py-6 text-white bg-blue-600 rounded-lg font-medium">Explore the Editor
        </Link>
    </div>
  )
}

export default Box1