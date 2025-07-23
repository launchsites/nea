import React from 'react';
// import {useState} from 'react';
// import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    
    <div className="left-3 right-3 fixed top-0 p-4 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg z-50 rounded-2xl">

      {/*flex container with items*/}
      <div className="flex justify-between items-center">
        <p className="text-black font-semibold text-lg">Jamie's NEA</p>
        <div className="flex gap-4">
          <a href="/sign-up" className="text-white bg-blue-300 border-2 rounded-2xl px-2 py-1 hover:bg-blue-500 transition">Sign Up</a>
          <a href="/login" className="text-white bg-purple-300 border-2 rounded-2xl px-2 py-1 hover:bg-purple-500 transition">Log In</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar