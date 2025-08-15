import React from 'react';
// import {useState} from 'react';
// import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    
    <div className="flex items-center justify-center bg-black text-white p-5 ">
      {/* menu button */}
      <div className="border-gray-700 border-2">
        Menu
      </div>


      {/* title */}
      <div>
      Canvas website builder
      </div>

      {/* login button */}
      <div className="border-2 border-gray-700 rounded-xl p-2 hover:bg-yellow-500">
        <a className="border-gray-500 border-2 p-3 rounded-xl m-2">Login</a>
      </div>

      
    </div>
  )
}

export default Navbar