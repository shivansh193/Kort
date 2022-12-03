import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Form() {
  return (
    <div>
      <h1>Raise a case for yourself</h1>
      <h3>Describe various details related to your case here</h3>
      <Box
        sx={{
          width: 700,
          maxWidth: "100%"
        }}
      >
        <TextField againstWho label="0x......" id="fullWidth" />
      </Box>
    </div>
  );
}