"use client";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="relative h-full w-full bg-[url('/images/bg-image.jpg')] bg-no-repeat bg-cover bg-fiexd bg-center">
      <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <Navbar />
        <div className="flex flex-col mx-auto w-1/3 p-12 mt-20 bg-black bg-opacity-70 rounded-lg">
          <div className="text-3xl text-white font-bold pb-4">Sign In</div>
          <InputField
            placeholder="Email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputField
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            text="Sign up"
            onClick={() => {
              if (email && password) {
                console.log(email, password);
              } else {
                console.error(
                  "Username, Email and Password cannot be empty, null or undefined"
                );
              }
            }}
          />

          <div className="text-neutral-500">
            <Link href="/signup">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
