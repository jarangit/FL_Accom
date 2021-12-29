import React, { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material/";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import Card_image_product from "./card_image_product";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid #d8d8d8;
  padding: 10px;
  margin: 20px 0;
  transition: 0.3s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .grid_price {
    right: 0;
    top: 50px;
    width: 170px;
    border-left: 1px solid #d8d8d8;
    padding-left: 7px;
    min-height: 150px;
    .bg_blue {
      background: #9bdeff;
      padding: 8px;
    }
  }

  .grid_des_center {
    align-items: center;
  }

  @media (max-width: 1024px) {
    .grid_des_center {
      align-items: stretch;
    }
  }
`;

const Product_item = () => {
  const [hoverDiv, sethoverDiv] = useState(false);
  function hoverHandler() {
    sethoverDiv(true);
    console.log(hoverDiv);
  }
  function LeaveHandler() {
    sethoverDiv(false);
    console.log(hoverDiv);
  }

  return (
    <Div
      className="box_item"
      onMouseEnter={hoverHandler}
      onMouseLeave={LeaveHandler}
    >
      <Grid container spacing={1} className="grid_des_center">
        <Grid item xs={12} sm={4} justifyContent="center">
          <Card_image_product tackHover={hoverDiv} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container rowGap={2} alignItems="center">
            <Grid item md={12} lg={9}>
              <h3 className="jr_color_primary jr_blod">
                Property for sale in Bangkok, Thailand
              </h3>
              <h4 className="jr_blod jr_f16">
                3 br Condominium For Sale in ploenchit, Bangkok
              </h4>
              <div className="jr_f12">
                <p>
                  <Stack direction="row" spacing={1} className="jr_f14">
                    <div>
                      <img
                        src="https://i.ibb.co/94FVT2C/size.png"
                        width="14px"
                        className="jr_icon"
                      />
                      491.96 SQ.M.
                    </div>
                    <div>
                      <img
                        className="jr_icon"
                        src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/9C68BA6B-F37A-45E9-9370-98E8B995ADCB.svg"
                      />
                      2 beds
                    </div>
                    <div>
                      <img
                        src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/2DB963AF-B1E0-4E66-B52D-71E8CE7242C7.svg"
                        className="jr_icon"
                      />
                      2 baths
                    </div>
                  </Stack>
                </p>
              </div>

              <div>
                <a href="#">
                  <p className="jr_sky jr_f14 jr_hover_blue">
                    <img
                      src="https://i.ibb.co/HHFDHrR/location.png"
                      className="jr_icon"
                      width="20px"
                    />
                    Lumphini, Pathumwan, Bangkok (Ploenchit)
                  </p>
                </a>
                <a href="#">
                  <p className="jr_sky jr_f14 jr_hover_blue">
                    <img
                      src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/7A82D8F6-BE22-4CB9-B911-8EA48BB04ABE.png"
                      className="jr_icon"
                      width="20px"
                    />
                    BTS Chitlom ( 500 M )
                  </p>
                </a>
              </div>

              <p>
                <Stack direction="row" spacing={1}>
                  <button className="jr_chip">Penthouse</button>
                  <button className="jr_chip">Penthouse</button>
                  <button
                    className="jr_chip"
                    style={{
                      background: "#28a745",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Penthouse
                  </button>
                </Stack>
              </p>
            </Grid>
            <Grid item md={12} lg={3}>
              <div className="grid_price">
                <div>
                  <button className="bg_blue jr_blod jr_f14">For sale</button>
                  <p className="jr_blod jr_f16">฿ 77,000,000</p>
                </div>
                <div>
                  <button className="bg_blue jr_blod jr_f14">For sale</button>
                  <p className="jr_blod jr_f16">฿ 77,000,000</p>
                </div>
                <p className="jr_f14">Code: AA20487</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Div>
  );
};

export default Product_item;
