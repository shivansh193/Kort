import React from "react";
import Image from "next/image";
import logo from "../assets/logos/Kort Logo.png";

const Nft = () => {

  return (
    <div className="w-[400px] h-[400px] nft flex flex-col justify-evenly items-center">
      <span className="font-niceFont text-[3rem]">KORT</span>
      <Image alt="Logo" src={logo} width="250" height="250"></Image>
      <div className="flex flex-row justify-evenly items-center w-[90%]">
        <span className="font-niceFont text-[1.5rem]">0xx11</span>
        <span className="text-[1.2rem] font-bold">vs</span>
        <span className="font-niceFont text-[1.5rem]">332893</span>
      </div>
    </div>
  );
};

export default Nft;
