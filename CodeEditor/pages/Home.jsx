import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar' 
import 'remixicon/fonts/remixicon.css'
import Companies from '../components/Companies'
import Box1 from '../components/Box1'
const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
        <div className="flex flex-col items-center justify-center h-screen ">
          <h1 className="text-5xl font-bold mb-4">Welcome to the College Code Platform</h1>
          <p className='text-7xl font-semibold text-blue-600'>Bored of classic editors? Explore our's🐍</p>
          <p className="text-lg mt-8 text-gray-700">Your one-stop solution for python assignments and projects.</p>
          <p className="text-lg mt-2 text-gray-700">Why are you waiting start your journey now...</p>
          <div className='flex gap-5 m-7'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            <i className="ri-google-fill"></i> SignIn
          </button>
          <Link to="/editor" className="border border-black text-blue-600 px-6 py-3 rounded-lg font-medium">
            <i className="ri-code-fill"></i> Explore the Editor
          </Link>
          </div>
        </div>
        <div className='bg-red-700 h-screen w-full flex justify-center'>
          <Companies />
        </div>
        <div className='h-screen w-full flex'>
          <div className='w-1/2 flex items-center px-20'><img className='border-2 rounded-4xl' src="../public/7090544.jpg" alt="" /></div>
          <div className='w-1/2 flex items-center justify-center'><Box1/></div>
        </div>
        
    </div>
  )
}

export default Home