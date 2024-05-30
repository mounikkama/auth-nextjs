"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const signUpHandler = async ()=>{

  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen p-2">
        <div>Sign up Page</div>
        <label htmlFor="username">User Name </label>
        <input
          id="username"
          type="text"
          placeholder=" USER NAME"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
                <label htmlFor="Email">Email </label>
        <input
          id="Email"
          type="text"
          placeholder=" Email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
                <label htmlFor="password">password </label>
        <input
          id="password"
          type="password"
          placeholder=" password "
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button onClick={signUpHandler}>Signup Here</button>
        <Link href={'./login'}>Login Here</Link>
      </div>
    </>
  );
};

export default SignUpPage;
