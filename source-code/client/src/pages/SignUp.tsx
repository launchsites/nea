import React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar.tsx'
import {validate} from "../utilities/validation.ts"

export default function signUp() {
  //username
  const [username, setUsername] = useState("");
  //email
  const [email, setEmail] = useState("");
  //password
  const [password, setPassword] = useState("");

  

  //on form submit
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    // stop page reloading
    event.preventDefault();

   //validation would go here
    const passwordValid: boolean = validate(password, "password")
    const emailValid: boolean = validate(email, "email")
    const usernameValid: boolean = validate(username, "username")

    if (passwordValid && emailValid && usernameValid) {
      const response = await fetch("/server/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
      const data = await response.json()
      console.log("done")

      if (data.status === "yes") {
        alert("Account Created Successfully")
      }
      else {alert("Login Failed")}
    }
    else {
      alert("Invalid credentials")
    }
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
          <button className={"border-2 cursor-pointer m-5 w-120 p-2 bg-yellow-500 transition hover:bg-yellow-400"} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
  
};