import { Grid, Typography } from "@mui/material";
import React from "react";
import Copy_right from "./copy_right";

const Footer = () => {
  return (
    <div style={{ background: "#002161", padding: "30px", color: "white" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <Typography variant="h2">
                Send your message to AccomAsia agent
              </Typography>
              <Typography variant="h3">
                Send your message to AccomAsia agent
              </Typography>

              <ul>
                <li>inquiry@accomasia.co.th</li>
                <li>(662) 367 5321</li>
                <li>(668) 1422-1412</li>
              </ul>

              <p>
                Accom Asia Co, Ltd 3388/93 Sirinrat Building, floor 25 Rama 4
                Road, Klongton, Klongtoey, Bangkok 10110
              </p>
            </Grid>
            <Grid item xs={12} sm={3}>
              Form
            </Grid>
          </Grid>
          <Copy_right />

        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
