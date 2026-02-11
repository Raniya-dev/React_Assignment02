import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
       <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Welcome to NewHire Portal
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        NewHire Portal is a centralized platform designed to showcase newly joined 
        employees and their professional details. Stay updated with our growing team.
      </p>

      <Link to={'/user'}>
      
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
        View Employees
      </button>
      
      </Link>


    </div>
  )
}

export default Home
