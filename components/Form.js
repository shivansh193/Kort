import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useAccount, useSigner, useContract, useProvider } from "wagmi";
import { BigNumber, ethers } from "ethers";
import { config } from "../config/config";
import axios from "axios";
export default function Form() {
  const { isConnected, address } = useAccount();
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const kort = new ethers.Contract(config.kortAddress, config.kortABI, signer);
  const kortToken = new ethers.Contract(
    config.tokenAddress,
    config.tokenABI,
    signer
  );
  const [formData, setFormData] = useState({
    against: "",
    desp: "",
    file: undefined,
  });

  useEffect(() => {
    if (signer) {
      //todo
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signer]);

  const sign_message = async () => {
    const messageRequested = (
      await axios.get(
        `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
      )
    ).data; //Get message
    const signedMessage = await signer.signMessage(messageRequested); //Sign message
    return {
      signedMessage: signedMessage,
      address: address,
    };
  };

  const deploy = async (e) => {
    // Sign message for authentication
    const signingResponse = await sign_message();

    // Get a bearer token
    const accessToken = (
      await axios.post(
        `https://api.lighthouse.storage/api/auth/verify_signer`,
        {
          publicKey: signingResponse.address,
          signedMessage: signingResponse.signedMessage,
        }
      )
    ).data.accessToken;

    // Push file to lighthouse node
    const output = await lighthouse.upload(e, accessToken);
    console.log("File Status:", output);
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log("Visit at https://ipfs.io/ipfs/" + output.data.Hash);
    return "ipfs://" + output.data.Hash;
  };
  const raiseCase = async (e) => {
    try {
      const hash = await deploy(e);
      //take approval
      const tx1 = await kortToken.approve(
        config.kortAddress,
        ethers.utils.parseEther("1")
      );
      await tx1.wait();
      const tx2 = await kort.proposeCase(
        formData.against,
        formData.options,
        hash
      );
      await tx2.wait();
      alert("Case Created");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-niceFont text-[4rem]">
        Raise a case for yourself
      </span>
      <span className="text-[1.5rem]">
        Describe various details related to your case here
      </span>
      <div className="w-full flex flex-col justify-center items-center mt-5">
        <div className="h-[3rem] w-full bg-caseCard flex flex-col justify-center items-center p-3 rounded-xl mt-4">
          <input
            type="text"
            className="w-full h-full bg-caseCard outline-none border-none"
            placeholder="Wallet Address of Other Party"
            onChange={(e) => {
              setFormData({ ...formData, against: e.target.value });
            }}
          ></input>
        </div>
        <div className="h-[3rem] w-full bg-caseCard flex flex-col justify-center items-center p-3 rounded-xl mt-4">
          <input
            type="text"
            className="w-full h-full bg-caseCard outline-none border-none"
            placeholder="Description about the case"
            onChange={(e) => {
              setFormData({ ...formData, desp: e.target.value });
            }}
          ></input>
        </div>
        <input
          type="file"
          className="mt-5"
          value={formData.file}
          onChange={(e) => {
            e.preventDefault();
            setFormData({ ...formData, imageFile: e.target.files });
          }}
        />
      </div>
    </div>
  );
}
