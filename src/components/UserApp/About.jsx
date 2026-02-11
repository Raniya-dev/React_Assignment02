import React from 'react'

function About() {
  return (
        <div className="min-h-screen bg-blue-50 px-8 py-16">
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">
        
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          About NewHire Portal
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          NewHire Portal is a web-based employee management platform designed 
          to display and manage newly joined employees and their professional details 
          in an organized and structured manner.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Our Purpose
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Provide a centralized system for tracking new hires</li>
          <li>Simplify employee data management</li>
          <li>Enhance team visibility and transparency</li>
          <li>Support smooth onboarding processes</li>
        </ul>

        <p className="text-gray-700 mt-6 leading-relaxed">
          We believe that every new beginning deserves recognition, 
          and structured employee management leads to better team growth.
        </p>

      </div>

    </div>
  )
}

export default About
