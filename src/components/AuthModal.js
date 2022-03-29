import React, { useState } from "react";
import { Cancel } from "@mui/icons-material";
import { Button, Input } from "@mui/material";

const AuthModal = ({ setShowModal, isSignup }) => {
  // const isSignup = true;
  const [value, setValue] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState(null);
  const { email, password, cpassword } = value;
  //
  const handleClick = () => {
    setShowModal(false);
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && password !== cpassword) {
      setError("Password not matched");
    } else {
      setError(null);
      try {
      } catch (error) {
        setError(error);
      }
    }

    console.log(value);
  };
  //
  //
  return (
    <div className="absolute top-[100px] right-0 left-0 bg-white mr-auto ml-auto  w-[560px]  p-10 rounded-[10px]">
      <Button
        onClick={handleClick}
        className="flex items-center justify-center float-right !w-7 !h-7 !mr-[-45px] !mt-[-30px]"
      >
        <Cancel />
      </Button>
      <h2 className="text-xl mb-2 font-black">
        {isSignup ? "CREATE ACCOUNT" : "LOG IN"}
      </h2>
      <p>By clicking you are agree to our terms and policies.</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          type="email"
          placeholder="Enter your email"
          required
          id="email"
          value={email}
          name="email"
          onChange={(e) =>
            setValue({ ...value, [e.target.name]: e.target.value })
          }
          className="w-full py-2 m-1 text-lg"
        />

        <Input
          type="password"
          placeholder="Enter your password"
          required
          id="password"
          value={password}
          name="password"
          onChange={(e) =>
            setValue({ ...value, [e.target.name]: e.target.value })
          }
          className="w-full py-2 m-1 text-lg"
        />

        {isSignup && (
          <Input
            type="password"
            placeholder="Enter repeat password"
            required
            id="cpassword"
            value={cpassword}
            name="cpassword"
            onChange={(e) =>
              setValue({ ...value, [e.target.name]: e.target.value })
            }
            className="w-full py-2 m-1 text-lg"
          />
        )}

        <Button
          type="submit"
          className="bg-gradient-to-r from-[#fe3072] to-[#ff5948] !text-white !py-3 !px-[30px] !text-[15px] !rounded-[30px] hover:bg-gradient-to-l hover:from-[#fe3072] hover:to-[#ff5948] !mt-2"
        >
          Submit
        </Button>
        <p className="text-[#882626] font-semibold py-2">{error}</p>
        <hr className="border-2" />
        <h2 className="text-xl mb-2 font-black uppercase py-2">Get the app</h2>
      </form>
    </div>
  );
};

export default AuthModal;
