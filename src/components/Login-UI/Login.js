import React from "react";

export default function Login() {
  return (
    <div>
      Login
      <form>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" />
        <br></br>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
