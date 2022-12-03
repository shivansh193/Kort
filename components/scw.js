import React from "react";
import { useRouter } from "next/router";
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

const scw = () => {
  const router = useRouter();
  return (
    <div className="main flex flex-col justify-center items-center text-black">
      <button
        className="w-20 h-10 bg-red-300"
        onClick={() => {
          connectWallet();
        }}
      >
        Enter Dapp
      </button>
    </div>
  );
};

export default scw;
