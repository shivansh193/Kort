import React from "react";
import Image from "next/image";
import logo from "../assets/logos/KortLogo.png";

const Nft = () => {
  /*  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    canvas.toBlob(async (blob) => {
      let file = new File(
        [blob],
        `ReadMyDiaryNFT_${allDiaries[diaryId].diaryName}.png`,
        { type: "image/png" }
      );
      // console.log(file);
      // var url = window.URL.createObjectURL(file);
      // window.location.assign(url);

      const metadata = await client.store({
        name: `${allDiaries[diaryId].diaryName} NFT`,
        image: file,
        description: `${allDiaries[diaryId].description}`,
      });

      console.log("metadata:", metadata.ipnft);
       try {?Mt createToken.wait(); 
        router.push("/Home");
      } catch (error) {
        alert(error.message);
      }
    });
  }; */

  return (
    <div className="w-[500px] h-[500px] nft flex flex-col justify-start items-center">
      <span className="font-niceFont text-[5rem] mb-5">KORT</span>
      <Image alt="Logo" src={logo} width="280" height="280"></Image>
      <div className="flex flex-row justify-evenly items-center w-[90%] mt-10">
        <span className="font-niceFont text-[2.5rem]">0xx11</span>
        <span className="text-[1.8rem] font-bold">vs</span>
        <span className="font-niceFont text-[2.5rem]">332893</span>
      </div>
    </div>
  );
};

export default Nft;
