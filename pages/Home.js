import React from "react";
import CaseCard from "../components/CaseCard";
import CurvedButton from "../components/CurvedButton";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import image from "../assets/images/image.jpeg";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  return (
    <div className="main min-h-screen flex flex-col justify-start items-center">
      <div className="main min-h-screen flex flex-col justify-start overflow-y-scroll no-scrollbar items-center">
        <Navbar></Navbar>
        <div className="w-[45%]">
          <Image src={image}></Image>
        </div>

        <div className="w-[50%] flex flex-row justify-between items-center mt-10">
          <CurvedButton
            width="w-[20rem]"
            height="h-[5rem]"
            bg="bg-caseCard hover:bg-navBg "
            textSize="text-xl"
            title="Raise A Case"
            action={() => {
              router.push("/RaiseACase");
            }}
          ></CurvedButton>

          <CurvedButton
            width="w-[20rem]"
            height="h-[5rem]"
            bg="bg-caseCard hover:bg-navBg "
            textSize="text-xl"
            title="Stake"
            action={() => {
              router.push("/Stake");
            }}
          ></CurvedButton>
        </div>
        <div className="text-black mt-10 text-[2.6rem] font-bold">
          Ongoing Cases
        </div>
        <div className="flex flex-col justify-start items-center w-full overflow-scroll no-scrollbar h-[60%]">
          {/* Cases List */}
          <CaseCard
            action={() => {
              router.push("/CaseDetails");
            }}
          ></CaseCard>
        </div>
      </div>
    </div>
  );
};

export default Home;