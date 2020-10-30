import React, { useRef } from "react";
import "./LoginPage.scss";
import Input from "../Input/Input";
import axios from "axios";

import { Link } from "react-router-dom";

export default function LoginPage() {
  const formData = {
    email: useRef(),
    password: useRef(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = async () => {
      const req = {
        email: formData.email.current.value,
        password: formData.password.current.value,
      };

      const res = await axios.post("http://localhost:5000/login", req);

      console.log(res);
      console.log(req);
    };

    post();
  };
  return (
    <div className="login">
      <div className="login__heading">Log In</div>
      <form action="POST" className="login__form">
        <Input refer={formData.email} placeholder="Email" />
        <Input refer={formData.password} placeholder="Password" />
        <button onClick={(e) => handleSubmit(e)} className="login__btn btn">
          Submit
        </button>
      </form>

      <p>
        Don't Have an account?
        <Link
          to={`/signup`}
          style={{
            // textDecoration: "none",
            color: "inherit",
            marginLeft: "5px",
          }}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
