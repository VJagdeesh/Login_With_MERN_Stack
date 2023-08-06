import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, "    ", password);
  };
  return (
    <div>
      Login
      <form onSubmit={submitHandler}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
