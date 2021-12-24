import React from "react";
import styled from "styled-components";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
const Div = styled.div`
  position: relative;
  :hover {
    .centered {
      display: block;
      transition: 0.5s;
    }
  }

  .img_thumb {
    :hover:before {
      opacity: 1;
      transition: 0.5s;
    }
  }

  .img_thumb:before {
    content: "";
    border-radius: 8px;
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transition: height 0.5s ease-out;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
  }

  .bottom_left {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: #9bdeff;
  }
  .bottom_right {
    position: absolute;
    bottom: 12px;
    right: 0;
    color: white;
    font-size: 1.5vh;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 4px 6px;
  }
  .but_blue_jr {
    max-height: 20px;
    font-size: 1.5vh;
    padding: 2px 6px;
    border-radius: 2px;
    color: #002161;
    background: #9bdeff;
  }
  .centered {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
  }
  .button_center {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    transition: 0.3s;
  }
`;
const Card_image_product = () => {
  return (
    <Div>
      <div className="img_thumb">
        <img
          src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png"
          width="100%"
        />
      </div>
      <div className="centered">
        <button className="button_center">
          <p>View popperty</p>
        </button>
      </div>
      <div className="bottom_left">
        <button className="but_blue_jr">
          <span>Leangsua villa</span>
        </button>
      </div>
      <div className="bottom_right">
        <PhotoOutlinedIcon className="jr_icon" />
        <span>12</span>
      </div>
    </Div>
  );
};

export default Card_image_product;
