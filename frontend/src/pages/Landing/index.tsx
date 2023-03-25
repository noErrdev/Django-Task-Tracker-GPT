import React from "react";
import PersonIcon from "../../assets/person-in-front-computer.png";
import OvalButton from "../../components/Button/OvalButton";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center md:flex-row">
      <img
        className=" mr-10 w-52 xl:w-72"
        src={PersonIcon}
        alt="landing-image"
      />
      <div className="flex flex-col items-center md:items-start">
        <h1 className=" text-xl font-semibold xl:text-4xl">Task Tracker</h1>
        <h1 className=" text-xl font-semibold xl:text-4xl">
          The all-in-one Workplace
        </h1>
        <h1 className=" ml-1 text-base xl:text-lg">
          Notes, tasks, & AI assitantnce
        </h1>
        <OvalButton
          variant="tertiary"
          size="fit"
          className=" mt-6 px-5"
          onClick={() => navigate("/login")}
        >
          Get Started
        </OvalButton>
      </div>
    </div>
  );
}
