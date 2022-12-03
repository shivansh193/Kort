import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";


export default function Form() {

  const [formData, setFormData] = useState({
    against: "",
    desp: "",
    file: undefined
  });

  useEffect(() => {
    console.log(formData);
  }, [formData])
  
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
