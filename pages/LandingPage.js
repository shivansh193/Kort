import React from "react";
import { useRouter } from "next/router";
import Kort from "../assets/logos/Kort Logo.png";
import myLogo from "../assets/logos/Kort Logo.png";
import Image from "next/image";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="main min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-row justify-between items-center">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <span className="font-niceFont text-[15rem]">KORT</span>
          <span className="font-niceFont text-[3rem] text-center">
            The price of JUSTICE is eternal PUBLICITY
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image alt="Kort Logo" src={Kort} width="500" height="500"></Image>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
