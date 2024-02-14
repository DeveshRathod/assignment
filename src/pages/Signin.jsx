import React, { useState } from "react";
import CardPage from "../components/cardPage";
import axios from "axios";
import InputBox from "../components/InputBox";
import LinkButton from "../components/LinkButton";

const Signin = ({ setIsAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <CardPage>
      <div className="flex flex-col items-center pt-10">
        <h1 className=" text-2xl">Sign In</h1>
        <p className=" p-2">Enter Your details to login into account</p>
      </div>
      <div className="flex flex-col items-center pt-4 pb-6">
        <InputBox
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
          label="Username"
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          label="Password"
        />
      </div>
      <LinkButton
        to="/"
        curr="Sign In"
        warnLink="/signup"
        warnText="Sign Up"
        onClick={async () => {
          try {
            const response = await axios.post(
              "https://dummyjson.com/auth/login",
              {
                username,
                password,
              }
            );
            const token = response.data.token;
            setIsAuth(true);
            localStorage.setItem("token", token);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </CardPage>
  );
};

export default Signin;
