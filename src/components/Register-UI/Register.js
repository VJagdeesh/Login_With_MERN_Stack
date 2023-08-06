import React from "react";

export default function Register() {
  return (
    <div>
      Register
      <form>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" />
        <br></br>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br></br>
        <label htmlFor="password">Retype Password</label>
        <input type="password" id="password" />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
