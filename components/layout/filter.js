import React from "react";
import {
  TextField,
  SearchIconWrapper,
  StyledInputBase,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";
const Filter_bar = () => {
  return (
    <Box sx={{ margin: "20px 0" }} height={48} justifyContent="space-between">
      <TextField
        id="outlined-basic"
        label="Keyword"
        variant="outlined"
        sx={{ height: "48px" }}
        size="medium"
        inputProps={{
          style: {
            padding: 10,
            height: 28,
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          height: "100%",
          padding: "0",
          marginLeft: "-16px",
          borderRadius: "10px",
        }}
      >
        <SearchIcon sx={{ padding: "0", fontSize: "35px" }} />
      </Button>

      <Button variant="containerd" sx={{ height: "100%" }}>
        Rent
      </Button>
      <Button variant="containerd" sx={{ height: "100%" }}>
        Propperty type
      </Button>
      <Button variant="containerd" sx={{ height: "100%" }}>
        Price range
      </Button>

      <Button variant="outlined" color="primary" sx={{ height: "100%" }}>
        Filters
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "100%", marginLeft: "5px" }}
      >
        Save Search
      </Button>
    </Box>
  );
};

export default Filter_bar;
