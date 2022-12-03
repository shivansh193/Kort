import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckboxList from "../components/ListMui";
import Button from "@mui/material/Button";
import CheckBox from "../components/CheckBox";
import CurvedButton from "./CurvedButton";
export default function List() {
  const [settlement, setSettlement] = useState("");
  const [settlements, setSettlements] = useState([]);
  const handleClick = (event) => {
    event.preventDefault();
    setSettlements([...settlements, settlement]);
    console.log(settlements);
  };

  useEffect(() => {
    console.log(settlements);
  }, [settlements]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h3 className="mt-5">
        Describe the solutions to your case here {console.log(settlement)}
      </h3>

      <div className="h-[8rem] w-[60%] bg-caseCard flex flex-col justify-center items-center p-3 rounded-xl mt-4">
        <textarea
          type="text"
          className="w-full h-full bg-caseCard outline-none border-none"
          placeholder="Field 1"
          onChange={(e) => {
            setSettlement(e.target.value);
          }}
        ></textarea>
      </div>

      <div className="h-5"></div>
      <CurvedButton
        width="w-[6rem]"
        height="h-[3rem]"
        bg="bg-caseCard"
        title="Submit"
        textSize="text-[1rem]"
        action={() => {
          console.log("clicked");
          setSettlements([...settlements, settlement]);
        }}
      >
        Submit
      </CurvedButton>
      {settlements.map((settlementStr) => (
        <div className="h-[8rem] w-[60%] bg-caseCard flex flex-col justify-start items-start p-3 rounded-xl mt-4">
         {settlementStr}
        </div>
      ))}
      <div className="h-5"></div>
      <CurvedButton
        width="w-[12rem]"
        height="h-[3rem]"
        bg="bg-caseCard"
        title="File Case"
        textSize="text-[1.4rem]"
        action={() => {
          console.log("clicked");
          setSettlements([...settlements, settlement]);
        }}
      >
        Submit
      </CurvedButton>
      <div className="h-5"></div>
    </div>
  );
}
