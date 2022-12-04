import React from "react";
import { useRouter } from "next/router";
import Kort from "../assets/logos/KortLogo.png";
import myLogo from "../assets/logos/KortLogo.png";
import Image from "next/image";
import CurvedButton from "../components/CurvedButton";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="main min-h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-indigo-900 text-center py-4 lg:px-4">
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            IMPORTANT
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            Check out our dispute policy template{" "}
            <a
              href="https://docs.google.com/document/d/1MXvJtGLGH0ZIuZwDy-H4RmiociFcXW-N/edit?usp=sharing&ouid=100405828264834320467&rtpof=true&sd=true"
              target="_blank"
            >
              <span className="underline text-blue">here</span>
            </a>
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
      <div className="w-[90%] flex flex-row justify-between items-center">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <span className="font-niceFont text-[15rem]">KORT</span>
          <span className="font-niceFont text-[3rem] text-center">
            The price of JUSTICE is eternal PUBLICITY
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image alt="KortLogo" src={Kort} width="500" height="500"></Image>
        </div>
      </div>
      <div className="h-5"></div>
      <CurvedButton
        width="w-[20rem]"
        height="h-[5rem]"
        bg="bg-caseCard hover:bg-navBg "
        textSize="text-xl"
        title="Enter Dapp"
        action={() => {
          router.push("/Home");
        }}
      ></CurvedButton>
      <div className="h-14"></div>
      <div className="w-[60%]">
        <h1 className="font-semibold font-niceFont">Learn more about us</h1>
        <p>
          <blockquote className="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
            <p>
              {" "}
              Kort is a Decentralized Dispute Resolution platform offered by
              Buildorz and is set up by lawyers and developers to disrupt the
              way disputes are resolved today.
            </p>
          </blockquote>
          <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900"></div>
          We believe that long amounts of time spent in the courts is
          detrimental to the economy and Kort will improve the productivity of
          society manifold. Our mission is to transform dispute resolution by
          bringing together real-time jurors using the blockchain technology to
          provide cost effective solutions and to create an ecosystem & culture
          where people are pre-disposed to settling disputes amicably with
          fairness and equity.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
