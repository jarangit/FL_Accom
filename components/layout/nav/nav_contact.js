import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ErrorIcon from "@mui/icons-material/Error";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
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
  .jr_f14 {
    width: 80%;
  }
  @media (max-width: 375px) {
    .but_blue {
      margin: 15px 0;
    }
  }
`;
const Nav_contact = () => {

  function GoToReadMore() {
    window.scrollTo({
      top: 50000,
      behavior: "smooth",
    });
  }
  return (
    <Div>
              <ErrorOutlineOutlinedIcon className="left_icon " />

      <p className="jr_f14 jr_blod">
        Looking for{" "}
        <span style={{ color: "#65acf0" }}>Property for sale in Bangkok</span>{" "}
        Send inquiry now. Let’s our agent help you find best match property.
        Call us in official hours | MON - FRI 09.00 AM - 05.00 PM (GMT+7) IT’S
        FREE!
      </p>
      <button className="but_blue" onClick={GoToReadMore}>Send inquiry</button>
    </Div>
  );
};

export default Nav_contact;
