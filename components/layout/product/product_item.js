import React, { useState } from "react";
import { Grid, Stack } from "@mui/material/";
import Card_image_product from "./card_image_product";
import styled from "styled-components";
import Location_svg from "../../../lib/img/svg/location";
import Bts_svg from "../../../lib/img/svg/bts";
import Bathtub_svg from "../../../lib/img/svg/bathtub";
import Bed_svg from "../../../lib/img/svg/bed";
const Div = styled.a`
  border: 1px solid #d8d8d8;
  padding: 10px;
  margin: 20px 0;
  transition: 0.3s;
  display: block;
  .jr_flex_align_center {
    display: flex;
    align-items: center;
  }
  svg {
    margin: 0 5px;
  }
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

const Product_item = (props) => {
  console.log(props.data_list.data);
  const [getId, setgetId] = useState()
  const [hoverDiv, sethoverDiv] = useState(false);
  function hoverHandler(id) {
    if (id) {
      setgetId(id);
      sethoverDiv(true)
    }
    console.log(getId);
  }
  function LeaveHandler() {
    sethoverDiv(false);
    console.log(hoverDiv);
  }

  const Showitems = (props) => {
    console.log(props);
    const {
      id,
      photo,
      link,
      property_name,
      rent_price,
      photo_count,
      landvalue,
      bathroom,
      bedroom,
      big_area,
      district_name,
      property_code,
      province_name,
      subdistrict_name,
    } = props.data;
    return (
      <Div
        id={id}
        href="#"
        className="box_item"
        onMouseEnter={() => hoverHandler(id)}
        onMouseLeave={LeaveHandler}
      >
        <Grid container spacing={1} className="grid_des_center">
          <Grid item xs={12} sm={4} justifyContent="center">
            <Card_image_product
              tackHover={hoverDiv && id === getId}
              url={photo}
              photo_count={photo_count}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container rowGap={2} alignItems="center">
              <Grid item md={12} lg={9}>
                <h3 className="jr_color_primary">{subdistrict_name}</h3>
                <h4 className=" jr_f16">{property_name}</h4>
                <div className="jr_f12">
                  <p>
                    <Stack direction="row" spacing={1} className="jr_f14">
                      <div>
                        <img
                          src="https://i.ibb.co/94FVT2C/size.png"
                          width="14px"
                          className="jr_icon"
                        />
                        {landvalue}
                      </div>
                      <div className="jr_flex_align_center">
                        <Bed_svg />
                        {bedroom} beds
                      </div>
                      <div className="jr_flex_align_center">
                        <Bathtub_svg />
                        {bathroom} baths
                      </div>
                    </Stack>
                  </p>
                </div>

                <div>
                  <a href="#" style={{ display: "flex", alignItems: "center" }}>
                    <Location_svg width={14} height={14} />
                    <p className="jr_sky jr_f14 jr_hover_blue">
                      Lumphini, Pathumwan, Bangkok (Ploenchit)
                    </p>
                  </a>
                  <a href="#" style={{ display: "flex", alignItems: "center" }}>
                    <Bts_svg />

                    <p className="jr_sky jr_f14 jr_hover_blue">
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
                    <p className="jr_blod jr_f16">{rent_price}</p>
                  </div>
                  <div>
                    <button className="bg_blue jr_blod jr_f14">For sale</button>
                    <p className="jr_blod jr_f16">฿ 77,000,000</p>
                  </div>
                  <p className="jr_f14">Code: {property_code}</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Div>
    );
  };
  return (
    <>
      {props.data_list.data.featured.lenght !== 0 ? (
        <>
          {props.data_list.data.featured.map((items, key) => (
            <Showitems data={items} key={key} />
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Product_item;
