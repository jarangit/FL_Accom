import { Stack } from "@mui/material";
import React from "react";
import styled from 'styled-components'


const Copy_right = () => {
  return (
    <div className="jr_container">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <a>Logo</a>
          <a>Contact us</a>
          <a>Career</a>
          <a>Policy</a>
          <a>Policy</a>
        </div>
        <div>
          <p>Copyright © 2021 Accom Group. All rights reserved.</p>
        </div>
      </Stack>
    </div>
  );
};

export default Copy_right;
