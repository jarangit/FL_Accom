import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Logo_svg from "../../../lib/img/svg/logo";
const Div = styled.div`
  .grid_1 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    a {
      margin: 10px;
    }
  }
  .grid_2 {
    display: flex;
    align-items: center;
    justify-content: right;
    text-align: right;
  }
  .but_back_to_top {
    display: none;
    text-align: center;
    padding: 20px 0;
    color: #65acf0;
    button {
      background: #65acf0;
    }
  }
  .img_logo_coppy {
    display: none;
  }
  @media (max-width: 414px) {
    .grid_1 {
      justify-content: center;
    }
    .img_logo {
      display: none;
    }
    .img_logo_coppy {
      display: block;
    }
    .but_back_to_top {
      display: block;
    }
  }
`;
const Copy_right = () => {
  function GotoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Div
      style={{ border: "1px solid white", borderStyle: "solid none none none" }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} className="grid_1" alignItems="center">

          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Career</a>
          <a href="#">Policy</a>
          <a href="#">Sitemap</a>
        </Grid>
        <Grid item xs={12} sm={6} className="grid_2">
          <Logo_svg width={80} className="img_logo_coppy" />

          <div>
            <p className="jr_f14">
              Copyright © 2021 Accom Group. All rights reserved. Building By
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="but_back_to_top" onClick={GotoTop}>
        <button onClick={GotoTop}>
          <ArrowUpwardIcon sx={{ fontSize: "50px", color: "white" }} />
        </button>
        <p>Back to top</p>
      </div>
    </Div>
  );
};

export default Copy_right;
