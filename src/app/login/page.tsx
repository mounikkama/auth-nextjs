"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const loginHandler = async () => {};
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen p-2">
        <div>login Page</div>
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
        <button onClick={loginHandler}>Login Here</button>
        <Link href={"./signup"}>Signup here</Link>
      </div>
    </>
  );
};

export default LoginPage;
