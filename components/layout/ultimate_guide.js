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

const FakeDataTag = [
  "#Buy house in Bangkok",
  "#Buy Pet-friendly condo in Bangkok",
  "#Buy Penthouses in Bangkok",
  "#Buy condo in Bangkok",
  "#Apartment in Bangkok",
];
const Ultimate_guide = () => {
  return (
    <Div>
      <p
        style={{ backgroundColor: "rgba(101, 172, 240, 0.2)", padding: "10px" }}
        className="text_color_primary jr_f16 jr_blod"
      >
        Ultimate guide
      </p>

      <div className="jr_f14">
        <p>Buying guide</p>
        {FakeDataTag.map((items, key) => (
          <ul>
            <li>
              <a href="#" className="text_color_primary card_sky">
               {items}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <img src="https://i.ibb.co/vDZgq5K/banner-covid.jpg" width="100%" />
    </Div>
  );
};

export default Ultimate_guide;
