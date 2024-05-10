import { useEffect } from "react";
import InputField from "./InputField";

const SignUpForm = () => {

  const [userName, setUserName]= useEffect()
  const [email, setEmail]= useEffect()
  const [password, setPassword]= useEffect()
  return (
    <div className="flex flex-col mx-auto w-2/5 p-16 bg-black bg-opacity-70 rounded-lg">

      <div className="text-3xl text-white font-bold py-2">Sign In</div>
      <div className="w-full">
        <input placeholder="" className="w-full bg-neutral-700 text-white text-2xl px-4 py-2 my-6  rounded-md align-middle" type="text" />
      </div>
      <InputField placeholder="Username"/>

    </div>
  );
};

export default SignUpForm;
