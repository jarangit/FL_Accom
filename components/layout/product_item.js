import React from "react";
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
  .grid_price{
    right: 0;
    top: 50px;
    width: 170px;
    border-left: 1px solid #d8d8d8;
    padding-left: 7px;
    min-height: 150px;  }
`;
const Product_item = () => {
  return (
    <Div className="box_item">
      <Grid container spacing={1} >
        <Grid item xs={12} sm={4} justifyContent="center" >
          <Card_image_product />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container rowGap={2} alignItems="center">
            <Grid item md={12} lg={9}>
              <Typography variant="h3" color="primary">
                <strong>Property for sale in Bangkok, Thailand</strong>
              </Typography>
              <Typography variant="h4">
                <strong>
                  4,200 properties available on Accomasia for sale in Bangkok,
                  Thailand
                </strong>
              </Typography>
              <div className="jr_f12">
                <Typography variant="body1">
                  <Stack direction="row" spacing={1}>
                    <div>
                      <img
                        src="https://i.ibb.co/94FVT2C/size.png"
                        width="20px"
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
                </Typography>
              </div>

              <div>
                <p className="jr_sky jr_f12">
                  <AddLocationOutlinedIcon
                    className="jr_icon "
                    color="primary"
                  />
                  Lumphini, Pathumwan, Bangkok (Ploenchit)
                </p>
                <p className="jr_sky jr_f12">
                  <img
                    src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/7A82D8F6-BE22-4CB9-B911-8EA48BB04ABE.png"
                    className="jr_icon"
                    width="20px"
                  />
                  BTS Chitlom ( 500 M )
                </p>
              </div>

              <Typography variant="body2">
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
              </Typography>
            </Grid>
            <Grid item md={12} lg={3}>
              <div className="grid_price">
                <Typography variant="body1">
                  <strong
                    style={{
                      background: "#9bdeff",
                      color: "#002161",
                      padding: "5px 10px",
                    }}
                  >
                    FOR SALE
                  </strong>
                </Typography>
                <p>7200</p>
                <Typography variant="body1">
                  <strong
                    style={{
                      background: "#9bdeff",
                      color: "#002161",
                      padding: "5px 10px",
                    }}
                  >
                    FOR SALE
                  </strong>
                </Typography>
                <li>7200</li>
                <Typography variant="body1">
                  <strong>Code: AA64564</strong>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Div>
  );
};

export default Product_item;
