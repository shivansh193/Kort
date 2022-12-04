import React from "react";
import Image from "next/image";
import KortLogo from "../assets/logos/KortLogo.png";
import bell from "../assets/images/bell.jpg";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
        <Image alt="KortLogo" src={KortLogo} width="60" height="60"></Image>
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
        <div
          onClick={() => {
            router.push("/Notifications");
          }}
        >
          <Image alt="bell" src={bell} width="30" height="30"></Image>
        </div>
        <div className="w-4"></div>
        <ConnectButton></ConnectButton>
      </div>
    </div>
  );
};

export default Navbar;
