import React from "react";
import styled from "styled-components";
import { Stack, Button } from "@mui/material";

const Div = styled.div`
  ul {
    padding: 0px;
    li {
      margin-bottom: 20px;
    }
  }
  .card_sky {
    background-color: #9bdeff;
    padding: 5px 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    li {
    }
  }
`;
const Ultimate_guide = () => {
  return (
    <Div>
      <h3
        style={{ backgroundColor: "rgba(101, 172, 240, 0.2)", padding: "10px" }}
        className="text_color_primary"
      >
        Ultimate guide
      </h3>

      <div>
        <p>Buying guide</p>
        <ul>
          <li>
            <a href="#" className="text_color_primary card_sky">
              #Buy house in Bangkok
            </a>
          </li>
          <li>
            <a href="#" className="text_color_primary card_sky">
              #Buy Pet-friendly condo in Bangkok{" "}
            </a>
          </li>
        </ul>
      </div>
    </Div>
  );
};

export default Ultimate_guide;
