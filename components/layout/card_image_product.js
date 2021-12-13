import React from "react";
import styled from "styled-components";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
const Div = styled.div`
  position: relative;
  .bottom_left {
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
  .bottom_right {
    position: absolute;
    bottom: 12px;
    right: 12px;
    color:white;
    font-size:1.5vh;
    background-color:rgb(0, 0, 0, 0.5);
    padding: 4px 6px;
  }
  .but_blue{
      max-height: 20px;
      font-size:1.5vh;
      padding: 4px 6px;
      border-radius:2px;
      color: #002161;
  }
`;
const Card_image_product = () => {
  return (
    <Div>
      <img
        src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png"
        width="100%"
      />
      <button className="bottom_left but_blue">Leangsua villa</button>
      <div className="bottom_right">
        <PhotoOutlinedIcon className="jr_icon" /><span>12</span>
      </div>
    </Div>
  );
};

export default Card_image_product;
