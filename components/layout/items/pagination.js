import React from "react";
import { Stack, Button } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  input {
    width: 56px;
    text-align: center;
  }
  #input1 {
    color: #001743;
    border: 1px solid #001743;
    border-radius: 3px;
    margin-left: -3px;
    ::placeholder {
       color: #001743;
        opacity: 1;
      }
    }
  }
  
  @media (max-width: 375px) {
    .but_primary_w {
      width: 100%;
    }
    justify-content: center;
  }
`;
const Pagination_jr = () => {
  function GotoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Div>
      <button className="but_primary_w" onClick={GotoTop}>
        Back to top
        <ArrowUpwardOutlinedIcon className="jr_icon" />
      </button>
      <div>
        <Stack direction="row">
          <Button variant="contained" color="primary">
            <ArrowLeftIcon />
          </Button>
          <input id="input1" placeholder="" type="text" />
          <input placeholder="of 427" type="text" />
          <Button variant="contained" color="primary">
            <ArrowRightIcon />
          </Button>
        </Stack>
      </div>
    </Div>
  );
};

export default Pagination_jr;
