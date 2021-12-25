import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
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

  .left_icon {
    position: absolute;
    left: 14px;
    top: 18px;
    color: #65acf0;
  }
  @media (max-width: 375px) {
    .but_blue {
      margin: 15px 0;
    }
  }
`;
const Nav_request = () => {
  function GoToReadMore() {
    window.scrollTo({
      top: 50000,
      behavior: "smooth",
    });
  }
  return (
    <Div>
      <div>
        <MoodOutlinedIcon className="left_icon " />

        <p className="jr_f14 jr_blod">
          I know what i need in{" "}
          <span style={{ color: "#65acf0" }}>Property for sale in Bangkok</span>{" "}
          Send request now. Let’s make an appointment with our agent.{" "}
        </p>
      </div>
      <button className="but_blue" onClick={GoToReadMore}>
        Request a tour
      </button>
    </Div>
  );
};

export default Nav_request;
