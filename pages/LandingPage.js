import React from "react";
import { useRouter } from "next/router";
import Kort from "../assets/logos/Kort Logo.png";
import myLogo from "../assets/logos/Kort Logo.png";
import Image from "next/image";
import CurvedButton from "../components/CurvedButton";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="main min-h-[100vh] flex flex-col justify-center items-center">
      <div class="bg-indigo-900 text-center py-4 lg:px-4">
        <div
          class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            IMPORTANT
          </span>
          <span class="font-semibold mr-2 text-left flex-auto">
            Check out our dispute policy template <a href="https://docs.google.com/document/d/1MXvJtGLGH0ZIuZwDy-H4RmiociFcXW-N/edit?usp=sharing&ouid=100405828264834320467&rtpof=true&sd=true" target="_blank" ><span className="underline text-blue">here</span></a>
          </span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
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
          <Image alt="Kort Logo" src={Kort} width="500" height="500"></Image>
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
        <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
          <p>
            {" "}
            Kort is an Decentralized Dispute Resolution platform offered by
            Buildorz and is set up by lawyers and developers to disrupt the way
            disputes are resolved today.
          </p>
        </blockquote>
        <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
        <div class="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
          {/* <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg> */}
        </div>
        We believe that long amounts of time spent in the courts is detrimental
        to the economy and Kort will improve the productivity of society
        manifold. Our mission is to transform dispute resolution by bringing
        together real-time jurors using the blockchain technology to provide
        cost effective solutions and to create an ecosystem & culture where
        people are pre-disposed to settling disputes amicably with fairness and
        equity.
      </p>
    </div>
    </div>
  );
};

export default LandingPage;
