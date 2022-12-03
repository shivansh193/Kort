import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckboxList from "../components/ListMui";
import Button from "@mui/material/Button";
import CheckBox from "../components/CheckBox";
export default function List() {
  const [settlement, setSettlement] = useState("");
  const [settlements, setSettlements] = useState([]);
  const handleChange = (event) => {
    setSettlement(event.target.value);

    console.log("value is:", event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();

    // 👇️ value of input field
    setSettlements([...settlements, settlement]);
    console.log(settlement);
  };
  return (
    <div>
      <h3>Describe various details related to your case here</h3>
      <Box
        sx={{
          width: 700,
          maxWidth: "100%"
        }}
      >
        <TextField
          againstWho
          label="0x......"
          id="fullWidth"
          type="text"
          name="message"
          onChange={handleChange}
          value={settlement}
          autoComplete="off"
        />
      </Box>
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
      <CheckboxList listy={settlements} />
    </div>
  );
}