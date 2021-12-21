import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #002161;
  color: white;
  padding: 10px 14px;
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;
  @media (max-width: 375px) {
    .but_blue {
      margin: 15px 0;
    }
  }
`;
const Nav_contact = () => {
  return (
    <Div>
      <div>
        <Typography variant="body1">
         <strong>
         I’d like to consult with an agent about{" "}
          <span style={{ color: "#65acf0" }}>Property for sale in Bangkok</span>
          , Thailand.
         </strong>
        </Typography>
        <Typography variant="body1">
         <strong>
         Call us in official hours | MON - FRI 09.00 AM - 05.00 PM (GMT+7) IT’S
          FREE!
         </strong>
        </Typography>
      </div>
      <button className="but_blue">Send inquiry</button>
    </Div>
  );
};

export default Nav_contact;
