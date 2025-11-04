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
    // alert(username + " " + email + " " + password)
  }
  
  return (
    
    <div className="bg-black h-screen">
      <Navbar></Navbar>
      <div className="text-white justify-center flex p-10">
        <form className="flex flex-col text-4xl text-center" onSubmit={handleFormSubmit}>
            <h1 className="m-5 text-6xl">Sign Up</h1>
          {/* input username */}
          <input className="text-center border-2 m-5 p-2" type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}>
          </input>

          {/* input email */}
          <input className="text-center border-2 m-5 p-2" type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}>
            </input>

          {/* input password */}
          <input className="text-center border-2 m-5 p-2" type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}>
            </input>
          <a href="">
          <button className={"border-2 m-5 w-120 p-2 bg-yellow-500 transition hover:bg-yellow-400"} type="submit">Submit</button>
          </a>
        </form>
      </div>
    </div>
  )
  
};