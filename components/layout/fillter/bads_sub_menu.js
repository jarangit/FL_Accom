import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

const Div = styled.div`
  .stack_but {
    button {
      margin-left: -3px;
      border-radius:  0px 5px 5px 0px;
      border-color: #d8d8d8;
    }
    .but_primary{
      border-radius: 3px;
    }
  }
`;
const Bads_sub_menu = () => {
  return (
    <Div>
      <p className="jr_but_underLine_text">
        Beds
      </p>

      <Stack direction="row">
        <button className="but_primary">Studio</button>
        <div className="stack_but" >
          <button className="but_primary_w">1+</button>
          <button className="but_primary_w">2+</button>
          <button className="but_primary_w">3+</button>
          <button className="but_primary_w">4+</button>
          <button className="but_primary_w">5+</button>
        </div>
      </Stack>
    </Div>
  );
};

export default Bads_sub_menu;
