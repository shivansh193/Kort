import dynamic from "next/dynamic";
import { Suspense } from "react";
import Nft from "../components/Nft";
import LandingPage from "./LandingPage";

const Index = () => {
 

  return (
    <div>
      {/* <LandingPage></LandingPage> */}
      <Nft></Nft>
    </div>
  );
};

export default Index;