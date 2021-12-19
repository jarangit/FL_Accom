import React from "react";
import { Stack, Button } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const Pagination_jr = () => {
  function GotoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <button className="but_primary_w" onClick={GotoTop}>
        Back to top
        <ArrowUpwardOutlinedIcon className="jr_icon" />
      </button>
      <div>
        <Stack direction="row">
          <Button variant="contained" color="primary">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outlined">10</Button>
          <Button variant="text">of 420</Button>{" "}
          <Button variant="contained" color="primary">
            <ArrowRightIcon />
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Pagination_jr;
