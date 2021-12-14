import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Copy_right = () => {
  return (
    <div
      className="jr_container"
      style={{ border: "1px solid white", borderStyle: "solid none none none" }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
            width="80"
          />
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Career</a>
          <a href="#">Policy</a>
          <a href="#">Sitemap</a>
        </Stack>
        <div>
          <p>Copyright © 2021 Accom Group. All rights reserved.</p>
        </div>
      </Stack>
    </div>
  );
};

export default Copy_right;
