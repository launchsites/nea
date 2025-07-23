import React from 'react';
import { useState } from 'react';

export default function signUp() {
  //username
  const [username, setUsername] = useState("");
  //email
  const [email, setEmail] = useState("");
  //password
  const [password, setPassword] = useState("");

  //stop page reloading on form submit
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(username);
  }

  
  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          {/* input username */}
          <input className="" type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)}>
          </input>

          {/* input email */}
          <input className="" type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}>
            </input>

          {/* input password */}
          <input className="" type="text" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}>
            </input>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
  
};