import React, { useState } from "react";
import axios from "axios";
import { ToastProvider, useToasts } from "react-toast-notifications";
export default function Login() {
  const { addToast } = useToasts();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loggedin, setLoggedin] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", { email, password })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    addToast("Logged in ", { appearance: "success" });
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
