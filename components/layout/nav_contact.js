import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #002161;
  color: white;
  padding: 14px;
  border-radius: 5px;
  margin: 10px 0;
`;
const Nav_contact = () => {
  return (
    <Div>
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="body1">
            I’d like to consult with an agent about{" "}
            <span style={{color: "#65acf0"}} >Property for sale in Bangkok</span>, Thailand.
          </Typography>
          <Typography variant="body1">
            Call us in official hours | MON - FRI 09.00 AM - 05.00 PM (GMT+7)
            IT’S FREE!
          </Typography>
        </div>
        <Button variant="contained" style={{ background: "#65acf0" }}>
          Call now
        </Button>
      </Stack>
    </Div>
  );
};

export default Nav_contact;