import React from "react";
import styled from "styled-components";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import Image from "next/image";
const Div = styled.div`
  position: relative;
`;
const Card_image_product = (props) => {
  return (
    <Div>
      <div className="spc_img_thumb">
        {props.url ? (
          // <img src={props.url} height="100%" />
          <Image src={props.url}  layout="fill" />
        ) : (
          <div>LOADDING</div>
        )}
      </div>
      <div className="spc_centered">
        <button className="spc_button_center">
          <p>View property</p>
        </button>
      </div>
      <div className="spc_bottom_left">
        <button className="spc_but_blue_jr ">
          <span className="jr_f12 jr_blod">Leangsua villa</span>
        </button>
      </div>
      <div className="spc_bottom_right">
        <PhotoOutlinedIcon className="jr_icon" />
        <span>{props.photo_count}</span>
      </div>
    </Div>
  );
};

export default Card_image_product;
