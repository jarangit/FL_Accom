import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid container spacing={2} sx = {{ background: "red" }} >
        <Grid items xs={12} sm={2}></Grid>
        <Grid items xs={12} sm={8}>
          items
        </Grid>
        <Grid items xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
