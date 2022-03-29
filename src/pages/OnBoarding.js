import React, { useState } from "react";
import { Button } from "@mui/material";
import { Navbar } from "../components";
import { Image } from "../utils";

const OnBoarding = () => {
  const [formData, setFormData] = useState({
    fname: "",
    bdd: "",
    bmm: "",
    byy: "",
    gender_identity: "",
    showGender: false,
    gender_iterest: "",
    about: "",
    url: "",
  });
  //
  const {
    about,
    fname,
    bdd,
    bmm,
    byy,
    gender_identity,
    showGender,
    gender_iterest,
    url,
  } = formData;
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = () => {};
  return (
    <>
      <Navbar minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding border-2 border-solid border-slate-300">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <section className="p-5 flex flex-col w-[35%]">
            {/* name */}
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              name="fname"
              value={fname}
              onChange={handleChange}
              className="py-[15px] px-[30px] my-[10px] text-[15px] border-2 border-solid border-gray-300 outline-none rounded-[10px]"
              required
            />
            {/* name end */}

            {/* birthday */}
            <label>Birthday</label>
            <div className="flex flex-row">
              <input
                type="number"
                id="dd"
                placeholder="DD"
                name="bdd"
                value={bdd}
                onChange={handleChange}
                className="py-[15px] px-[30px] my-[10px] text-[15px] border-2 border-solid border-gray-300 outline-none rounded-[10px] w-[35%]"
                required
              />
              <input
                type="number"
                id="mm"
                placeholder="MM"
                name="bmm"
                value={bmm}
                onChange={handleChange}
                className="py-[15px] px-[30px] my-[10px] text-[15px] border-2 border-solid border-gray-300 outline-none rounded-[10px] w-[35%]"
                required
              />
              <input
                type="number"
                id="yy"
                placeholder="YYYY"
                name="byy"
                value={byy}
                onChange={handleChange}
                className="py-[15px] px-[30px] my-[10px] text-[15px] border-2 border-solid border-gray-300 outline-none rounded-[10px] w-[35%]"
                required
              />
            </div>
            {/* birthday end */}

            {/* gender */}
            <label className="my-[10px]">Gender</label>
            <div className="flex flex-row items-center">
              {/* man */}
              <input
                type="radio"
                id="man"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                className="mr-[10px] hidden"
                required
                checked={gender_identity === "man"}
              />
              <label
                className="rounded-[10px] border-2 border-solid border-gray-400 p-[10px] mr-[10px] h-[50px] cursor-pointer"
                htmlFor="man"
              >
                Man
              </label>
              {/* woman */}
              <input
                type="radio"
                id="woman"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                className="mr-[10px] hidden"
                required
                checked={gender_identity === "woman"}
              />
              <label
                className="rounded-[10px] border-2 border-solid border-gray-400 p-[10px] mr-[10px] h-[50px] cursor-pointer"
                htmlFor="woman"
              >
                Woman
              </label>
              {/* other */}
              <input
                type="radio"
                id="other"
                name="gender_identity"
                value="other"
                onChange={handleChange}
                className="mr-[10px] hidden"
                required
                checked={gender_identity === "other"}
              />
              <label
                className="rounded-[10px] border-2 border-solid border-gray-400 p-[10px] mr-[10px] h-[50px] cursor-pointer"
                htmlFor="other"
              >
                Other
              </label>
              {/* gender end */}
            </div>

            {/* show gender profjle */}
            <div className="flex items-center">
              <label htmlFor="sgender" className="my-[10px]">
                Show gender on my profile
              </label>
              <input
                type="checkbox"
                id="sgender"
                name="showGender"
                onChange={handleChange}
                className="ml-2"
                required
                checked={showGender}
              />
            </div>
            {/* show gender profjle end */}

            {/* show more */}
            <label className="my-[10px]">Interest</label>
            <div className="flex flex-row items-center">
              <input
                type="radio"
                id="man_interest"
                name="gender_iterest"
                value="man"
                onChange={handleChange}
                className="mr-[10px] hidden"
                required
                checked={gender_iterest === "man"}
              />
              <label
                className="rounded-[10px] border-2 border-solid border-gray-400 p-[10px] mr-[10px] h-[50px] cursor-pointer"
                htmlFor="man_interest"
              >
                Man
              </label>
              {/* woman */}
              <input
                type="radio"
                id="woman_interest"
                name="gender_iterest"
                value="woman"
                onChange={handleChange}
                className="mr-[10px] hidden"
                required
                checked={gender_iterest === "woman"}
              />
              <label
                className="rounded-[10px] border-2 border-solid border-gray-400 p-[10px] mr-[10px] h-[50px] cursor-pointer"
                htmlFor="woman_interest"
              >
                Woman
              </label>
              {/* other */}
              <input
                type="radio"
                id="everyone_interest"
                name="gender_iterest"
                value="everyone"
                onChange={handleChange}
                className="mr-[10px] hidden"
                required
                checked={gender_iterest === "everyone"}
              />
              <label
                className="rounded-[10px] border-2 border-solid border-gray-400 p-[10px] mr-[10px] h-[50px] cursor-pointer"
                htmlFor="everyone_interest"
              >
                Everyone
              </label>
            </div>
            {/* show more end */}

            {/* about me */}
            <label htmlFor="about" className="my-[10px]">
              About me
            </label>
            <input
              type="text"
              id="about"
              name="about"
              value={about}
              placeholder="I like long walks..."
              onChange={handleChange}
              className="py-[15px] px-[30px] my-[10px] text-[15px] border-2 border-solid border-gray-300 outline-none rounded-[10px]"
            />
            {/* about me end */}
            <Button
              type="submit"
              variant="primary"
              className="!py-[15px] !px-[30px] !my-[10px] !text-[15px] !border-2 !border-solid !border-gray-300 !outline-none !rounded-[10px] hover:!bg-slate-200"
            >
              SUBMIT
            </Button>
          </section>

          {/*  */}
          <section className="p-5 flex flex-col w-2/5">
            <label htmlFor="url">Profile photo</label>
            <input
              type="url"
              id="url"
              required
              onChange={handleChange}
              className="py-[15px] px-[30px] my-[10px] text-[15px] border-2 border-solid border-gray-300 outline-none rounded-[10px]"
              name="url"
            />
            <div className="w-full h-[70vh] rounded-md overflow-hidden">
              {url && <Image src={url} />}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
