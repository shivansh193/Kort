import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import KortLogo from "../assets/logos/Kort Logo.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navBar top-0 h-[10vh] shadow-2xl w-full bg-navBg flex flex-row justify-between items-center px-8">
      <div
        className="flex flex-row justify-center items-center cursor-pointer"
        onClick={() => {
          router.push("/LandingPage");
        }}
      >
        <Image alt="Kort Logo" src={KortLogo} width="60" height="60"></Image>
      </div>
      <div
        className="flex flex-row justify-center items-center ml-10 font-niceFont text-[3rem] tracking-[1rem] cursor-pointer"
        onClick={() => {
          router.push("/Home");
        }}
      >
        <span>KORT</span>
      </div>
      <div className="flex flex-row justify-center items-center">
        <span>Pending</span>
        <ConnectButton></ConnectButton>
      </div>
    </div>
  );
};

export default Navbar;
