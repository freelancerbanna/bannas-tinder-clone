import React from "react";
import { Button } from "@mui/material";
import { Image } from "../utils";
import TinderImg from "../img/tinder.png";

const Navbar = ({
  isAuthToken,
  minimal,
  setShowModal,
  showModal,
  setIsSignup,
}) => {
  return (
    <nav className="flex w-full justify-between">
      <div className="w-[170px]">
        <Image src={TinderImg} />
      </div>
      {!isAuthToken && minimal && (
        <Button
          className={`!text-xl !font-bold !py-[10px] !px-4 !rounded-[10px] !m-[10px] ${
            showModal
              ? "!text-[#a71e49] !bg-[#bebaba]"
              : "!text-[#fe3072] !bg-white"
          }`}
          onClick={() => {
            setShowModal(true);
            setIsSignup(false);
          }}
          disabled={showModal}
        >
          Log in
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
