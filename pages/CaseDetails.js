import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import NFT from "../assets/images/NFT.png";
import { NFTStorage, File } from "nft.storage";
import ProgressBar from "../components/ProgressBar";
import CurvedButton from "../components/CurvedButton";
import html2canvas from "html2canvas";
import Nft from "../components/Nft";

const CaseDetails = () => {
  const client = new NFTStorage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY1MjJhNzc0MjlmOTA1NDlmZjFCN0Q5RDkyQzE3M2RFNUI3ODAyMGQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDEyMTQ3MDM5NiwibmFtZSI6IktvcnQifQ.lCO3u7ci7fuTjOHRfh1JjSN4frko2T3lTMo4cv7rdUE",
  });

  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    canvas.toBlob(async (blob) => {
      let file = new File(
        [blob],
        `KortNFT_${allDiaries[diaryId].diaryName}.png`,
        { type: "image/png" }
      );
      console.log(file);
      var url = window.URL.createObjectURL(file);
      window.location.assign(url);

      const metadata = await client.store({
        name: `KORT NFT`,
        image: file,
        description: `${allDiaries[diaryId].description}`,
      });

      console.log("metadata:", metadata.ipnft);
      try {
        const createToken = await nftContract.createToken(
          metadata.url,
          diaryId
        );

        createToken.on("transactionHash", (hash) => {
          console.log(hash);
        });

        createToken.on("error", (error, recipt) => {
          console.log(error);
          alert(error);
        });
        await createToken.wait();
        router.push("/Home");
      } catch (error) {
        alert(error.message);
      }
    });
  };

  return (
    <div className="main min-h-[100vh] flex flex-col justify-start items-center">
      <Navbar></Navbar>
      <div className="flex flex-row justify-between items-center w-[80%] h-[80%] mt-20">
        <div ref={printRef}>
          <Nft></Nft>
        </div>

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
