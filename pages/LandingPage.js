import React from "react";
import { useRouter } from "next/router";
import { connect } from "http2";
import SocialLogin from "@biconomy/web3-auth";

async function connectWallet() {
  const socialLoginSDK = new SocialLogin();
  await socialLoginSDK.init("0x13881"); // Enter the network id in hex) parameter
  socialLoginSDK.showConnectModal();
  // show connect modal
  socialLoginSDK.showWallet();
  if (!socialLoginSDK?.web3auth?.provider) return;
  const provider = new ethers.providers.Web3Provider(
    socialLoginSDK.web3auth.provider
  );
  const accounts = await provider.listAccounts();
  console.log("EOA address", accounts);
}

const LandingPage = () => {
  const router = useRouter();
  return (
    <div
      className="main flex flex-col justify-center items-center text-black"
      style={{ backgroundImage: `url(${Kort})` }}
    >
      <div class="flex">
      <div class="flex-none ">
        <Image src={myLogo} />
        <p style={{ fontStyle: "sans-serrif" }}>Lorem Ipsum Caption Caption</p>
      </div>
      <div class="flex-initial">
        <h1>Our Aim and goal through our product</h1>
        <h4>
          Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem
          IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem
          IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem
          IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem
          IpsumLorem Ipsum Lorem Ipsum{" "}
        </h4>
<p>Feel like you are all set to roll? </p>

      </div>
      <button>Dive right</button> 
      </div>
      <button
        className="w-20 h-10 bg-red-300"
        onClick={() => {
          connectWallet();
          router.push("/Home");
        }}
      >
        Enter Dapp
      </button>
      </div>
    
  );
};

export default LandingPage;
