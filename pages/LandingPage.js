import React from "react";
import { useRouter } from "next/router";

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
    </div>
  );
};

export default LandingPage;
