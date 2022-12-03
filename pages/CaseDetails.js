import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import NFT from "../assets/images/NFT.png";
import ProgressBar from "../components/ProgressBar";
import CurvedButton from "../components/CurvedButton";

const CaseDetails = () => {
  return (
    <div className="main min-h-[100vh] flex flex-col justify-start items-center">
      <Navbar></Navbar>
      <div className="flex flex-row justify-between items-center w-[80%] h-[80%] mt-20">
        <Image src={NFT} width="450" height="450"></Image>
        <div className="flex flex-col w-[60%] h-[90%] justify-center items-end">
          <div className="w-full h-full bg-[#0a0909] rounded-xl overflow-y-scroll no-scrollbar flex flex-col justify-start items-center p-4 outline-2 border-[1px] border-solid border-white">
            <span className="font-bold text-2xl">Case Name</span>

            {/* List of Options */}
            <div className="flex flex-col w-full justify-center items-end">
              <div className="h-4"></div>
              <div className="flex flex-row justify-between items-center w-full mt-5">
                <span className="w-[60%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into
                </span>
                <ProgressBar
                  width="w-[10rem]"
                  height="h-[2rem]"
                  title="pro"
                  title2="70%"
                  progress={50}
                  max={100}
                ></ProgressBar>
              </div>

              <CurvedButton
                width="w-[6rem]"
                height="h-[3rem]"
                bg="bg-caseCard"
                title="Vote"
                textSize="text-[1.2rem]"
              ></CurvedButton>
            </div>
          </div>
          //
          <div className="h-5"></div>
          <CurvedButton
            width="w-[15rem]"
            height="h-[4rem]"
            bg="bg-caseCard"
            title="Approve"
            textSize="text-[1.2rem]"
          ></CurvedButton>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
