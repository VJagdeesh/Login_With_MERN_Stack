import React, { useState } from "react";
import axios from "axios";
import { ToastProvider, useToasts } from "react-toast-notifications";
export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { addToast } = useToasts();
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/register", { email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    addToast("Registered successfully", { appearance: "success" });
  };

  return (
    <div>
      Register
      <form onSubmit={submitForm}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br></br>
        <label htmlFor="password">Retype Password</label>
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
