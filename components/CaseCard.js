import React from "react";
import Image from "next/image";
import Sample from "../assets/images/Emerald Plate Level 4.png";
import ProgressBar from "./ProgressBar";
import NFT from "../assets/images/NFT.png"

const CaseCard = ({action}) => {
  return (
    <div className="w-[70%] h-[20rem] bg-caseCard rounded-xl py-4 px-10 flex flex-row justify-between items-center cursor-pointer my-4 ring-inset shadow-[2px_2px_10px_#FFFFFF]" onClick={action}>
      <Image src={NFT} width="250" height="250"></Image>
      <div className="w-[70%] h-[90%] bg-[#0a0909] rounded-xl overflow-y-scroll no-scrollbar flex flex-col justify-start items-center p-4 outline-2 border-[1px] border-solid border-white">
        <span className="font-bold text-2xl">Case Name</span>
        <div className="flex flex-row justify-between items-center w-full mt-5">
            <span>Option 1</span>
            <ProgressBar width="w-[10rem]" height="h-[2rem]" title="pro" title2="70%" progress={50} max={100}></ProgressBar>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-5">
            <span>Option 2</span>
            <ProgressBar width="w-[10rem]" height="h-[2rem]" title="pro" title2="70%" progress={50} max={100}></ProgressBar>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-5">
            <span>Option 3</span>
            <ProgressBar width="w-[10rem]" height="h-[2rem]" title="pro" title2="70%" progress={50} max={100}></ProgressBar>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-5">
            <span>Option 3</span>
            <ProgressBar width="w-[10rem]" height="h-[2rem]" title="pro" title2="70%" progress={50} max={100}></ProgressBar>
        </div>
      </div>
    </div>
  );
};


export default CaseCard;
