import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #002161;
  color: white;
  padding: 14px 14px 14px 38px;
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;
  position: relative;

  .jr_f14 {
    width: 80%;
  }
  .left_icon {
    position: absolute;
    left: 14px;
    top: 18px;
    font-size: 19;
    color: #65acf0;
  }

  .but_blue {
    min-height: auto;
  }
  @media (max-width: 375px) {
    .but_blue {
      margin: 15px 0;
    }
  }
`;
const Nav_call = () => {
  return (
    <Div>
      <CallOutlinedIcon className="left_icon " />
      <p className="jr_f14 jr_blod">
        I’d like to consult with an agent about{" "}
        <span style={{ color: "#65acf0" }}>Property for sale in Bangkok</span>{" "}
        Call us in official hours | MON - FRI 09.00 AM - 05.00 PM (GMT+7) IT’S
        FREE!{" "}
      </p>
      <div>
        <a href="tel:+6623675321" className="but_blue">
          {/* <button className="but_blue"> */}
          Call now
          {/* </button> */}
        </a>
      </div>
    </Div>
  );
};

export default Nav_call;
