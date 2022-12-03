import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="main flex flex-col justify-center items-center text-black">
      <button
        className="w-20 h-10 bg-red-300"
        onClick={() => {
          router.push("/Home");
        }}
      >
        Enter Dapp
      </button>
      <ConnectButton></ConnectButton>
    </div>
  );
};

export default LandingPage;
