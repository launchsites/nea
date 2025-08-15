import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar.tsx'

export default function signUp() {
  //username
  const [username, setUsername] = useState("");
  //email
  const [email, setEmail] = useState("");
  //password
  const [password, setPassword] = useState("");

  //on form submit
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    // stop page reloading
    event.preventDefault();

   //validation would go here
    
  }
  
  return (
    
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Navbar></Navbar>
      <div className="shadow-lg border-gray-200 py-6 w-96 rounded-xl bg-white">
        <h1 className="text-center text-2xl mb-10 font-bold">Sign Up</h1>
        <form className="flex flex-col gap-4 items-center justify-center" onSubmit={handleFormSubmit}>
          {/* input username */}
          <input className="text-center text-gray-800 py-2 border rounded-lg border-gray-400" type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}>
          </input>

          {/* input email */}
          <input className="text-center text-gray-800 py-2 border rounded-lg border-gray-400" type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}>
            </input>

          {/* input password */}
          <input className="text-center text-gray-800 py-2 border rounded-lg border-gray-400" type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}>
            </input>
          <a href="">
          <button className={`text-white bg-blue-300 p-2 rounded-xl hover:bg-purple-300`} type="submit">Submit</button>
          </a>
        </form>
      </div>
    </div>
  )
  
};