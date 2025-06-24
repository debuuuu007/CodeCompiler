import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar' 
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  return (
    <div>
      <Navbar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Welcome to the College Code Platform</h1>
          <p className="text-lg mb-8">Your one-stop solution for coding assignments and projects.</p>
          <div className='flex gap-5'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            <i className="ri-google-fill"></i> SignIn
          </button>
          <button className="border-2 border-black text-blue-600 px-6 py-3 rounded-lg font-medium">
            <i className="ri-code-fill"></i> Explore the Editor
          </button>
          </div>
        </div>
        <div className='bg-red-700 h-screen w-full flex items-center justify-center'>
          <h2 className="text-2xl font-bold text-white">Explore Our Features</h2>
        </div>
        <div className='bg-green-700 h-screen w-full flex items-center justify-center'>
          <h2 className="text-2xl font-bold text-white">Explore Our Features</h2>
        </div>
    </div>
  )
}

export default Home