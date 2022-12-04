import React from "react";
import CurvedButton from "../components/CurvedButton";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Notifications = () => {

  const router = useRouter();

  return (
    <div className="main min-h-screen flex flex-col justify-start items-center">
      <Navbar></Navbar>
      <div
        className="w-[70%] h-[6rem] bg-[#0a0909] rounded-xl py-4 px-10 flex flex-row justify-between items-center cursor-pointer my-4 ring-inset shadow-[2px_2px_10px_#FFFFFF]"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <span className="font-semibold text-2xl">
          Somebody has filed a Case against you
        </span>
        <CurvedButton
          width="w-[15rem]"
          height="h-[3rem]"
          bg="bg-caseCard hover:bg-navBg"
          textSize="text-xl"
          title="View Details"
          action={() => {
            router.push("/CaseDetails");
          }}
        ></CurvedButton>
      </div>
    </div>
  );
};

export default Notifications;
