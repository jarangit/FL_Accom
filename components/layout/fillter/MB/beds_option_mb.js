import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

const Div = styled.div`
  .stack_but {
    button {
      margin-left: -3px;
      border-radius: 0px 3px 3px 0px;
      border-color: #d8d8d8;
    }
  }
  .but_primary {
    border-radius: 3px;
  }
  .but_primary_w {
    padding: 10px 19px;
  }
`;
const Beds_option_mb = () => {
  return (
    <Div>
      <Stack direction="row" justifyContent="center">
        <button className="but_primary">Studio</button>
        <div className="stack_but">
          <button className="but_primary_w">+1</button>
          <button className="but_primary_w">+1</button>
          <button className="but_primary_w">+1</button>
          <button className="but_primary_w">+1</button>
          <button className="but_primary_w">+1</button>
        </div>
      </Stack>
    </Div>
  );
};

export default Beds_option_mb;