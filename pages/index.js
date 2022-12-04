import dynamic from "next/dynamic";
import { Suspense } from "react";
import Nft from "../components/Nft";
import Home from "./Home";
import LandingPage from "./LandingPage";

const Index = () => {
  return (
    <div>
      {/* <LandingPage></LandingPage> */}
      <Home />
    </div>
  );
};

export default Index;
