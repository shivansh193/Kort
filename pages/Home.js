import React from "react";
import CaseCard from "../components/CaseCard";
import CurvedButton from "../components/CurvedButton";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div className="main h-[120vh] flex flex-col justify-start items-center">
      <Navbar></Navbar>
      <div className="w-[50%] flex flex-row justify-between items-center mt-10">
        <CurvedButton
          width="w-[20rem]"
          height="h-[5rem]"
          bg="bg-navBg"
          textSize="text-xl"
          title="Raise A Case"
          action={() => {
            router.push("/RaiseACase");
          }}
        ></CurvedButton>

        <CurvedButton
          width="w-[20rem]"
          height="h-[5rem]"
          bg="bg-navBg"
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
  );
};

export default Home;
