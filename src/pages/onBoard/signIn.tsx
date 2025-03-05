import { useInitialSetUp } from "@/context/initialSetUp";
import { Button, Input } from "@heroui/react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import OnBoard from "./onBoard";
import React from "react";
import { jwtDecode } from "jwt-decode";


interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string;
}

export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { navigateTo, setUserLoginData } = useInitialSetUp();

  const handleSubmit = () => {

  };

  const handleOnSuccess = (loginResponse: any) => {
    console.log(loginResponse);
    const decodedData = jwtDecode<any>(loginResponse.credential);
    setUserLoginData(decodedData);
    navigateTo("/dashboard");
  }

  const handleOnError = (error: any) => {
    console.log("Login Failed:", error);
  }

  return (
    <OnBoard>
      <div>
        <form onSubmit={() => handleSubmit()} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" color="primary">
            Sign In
          </Button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-t-1" />
          <span className=" mx-3 text-xs text-content1">Or continue with</span>
          <hr className="flex-1 border-t-1" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin onSuccess={(res) => handleOnSuccess(res)} onError={(e) => handleOnError(e)} />
        </div>


      </div>
    </OnBoard>
  );
};
