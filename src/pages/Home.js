import React, { useState } from "react";
import { Button } from "@mui/material";
import { AuthModal, Navbar } from "../components";
import { Album } from "@mui/icons-material";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  //
  const isAuthToken = false;
  //
  const minimal = true;
  //
  const handleClick = () => {
    setShowModal(true);
    setIsSignup(true);
  };
  //
  //
  return (
    <div className="fixed w-screen h-screen tinderbg ">
      <Navbar
        isAuthToken={isAuthToken}
        minimal={minimal}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignup={setIsSignup}
      />
      <div className="flex flex-col items-center h-full justify-center relative">
        <h1 className="text-[78px] font-bold mb-3 text-white">
          Swipe right <Album />
        </h1>
        <Button
          className="bg-gradient-to-r from-[#fe3072] to-[#ff5948] !text-white !py-3 !px-[30px] !text-[15px] !rounded-[30px] hover:bg-gradient-to-l hover:from-[#fe3072] hover:to-[#ff5948]"
          onClick={handleClick}
          disabled={showModal}
        >
          {isAuthToken ? "Signout" : "Create account"}
        </Button>
        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignup={isSignup} />
        )}
      </div>
    </div>
  );
};

export default Home;
