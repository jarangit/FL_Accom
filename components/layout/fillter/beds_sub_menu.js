import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

const Div = styled.div`
  .stack_but {
    button {
      margin-left: -4px;
      border-radius: 0px 5px 5px 0px;
      border-color: #d8d8d8;
    }
    .but_primary {
      border-radius: 3px;
    }
    .but_primary_w:focus{
      background-color: #E0EEFC;
    }
  }
`;
const Beds_sub_menu = () => {
  return (
    <Div>
      <p className="underline_text">Beds</p>
      <Stack direction="row">
        <button className="but_primary">Studio</button>
        <div className="stack_but">
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

export default Beds_sub_menu;
