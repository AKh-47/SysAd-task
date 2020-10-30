import React, { useRef } from "react";
import "./SignUpPage.scss";
import Input from "../Input/Input";

import axios from "axios";

import { Link } from "react-router-dom";

export default function SignUpPage() {
  const formData = {
    name: useRef(),
    email: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = async () => {
      const req = {
        name: formData.email.current.value,
        email: formData.email.current.value,
        password: formData.password.current.value,
      };

      const res = await axios.post("http://localhost:5000/signup", req);

      console.log(res);
      console.log(req);
    };

    post();
  };

  return (
    <div className="sign">
      <div className="sign__heading">Sign Up</div>
      <form action="POST" className="sign__form">
        <Input refer={formData.name} placeholder="Name" />
        <Input refer={formData.email} placeholder="Email" />
        <Input refer={formData.password} placeholder="Password" />
        <Input
          refer={formData.confirmPassword}
          placeholder="Confirm Password"
        />
        <button onClick={(e) => handleSubmit(e)} className="sign__btn btn">
          Sign up
        </button>
      </form>
      <p>
        Already have an account?
        <Link
          to={`/login`}
          style={{
            // textDecoration: "none",
            color: "inherit",
            marginLeft: "5px",
          }}
        >
          Log In
        </Link>
      </p>
    </div>
  );
}
