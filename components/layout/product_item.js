import React from "react";
import { Grid, Stack, Typography } from "@mui/material/";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import Card_image_product from "./card_image_product";

const Product_item = () => {
  return (
    <div>
      <Grid
        container
        spacing={1}
        // rowSpacing={2}
        // columnSpacing={5}
        alignItems="center"
        sx={{
          border: "1px solid #dbdbdb",
          margin: "10px 0",
          padding: "5px",
        }}
      >
        <Grid item xs={12} sm={4} justifyContent="center">
          <Card_image_product />
        </Grid>
        <Grid item xs={12} sm={6}>
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
                  <AddLocationOutlinedIcon
                    className="jr_icon"
                    color="primary"
                  />
                  items
                </div>
                <div>
                  <AddLocationOutlinedIcon
                    className="jr_icon"
                    color="primary"
                  />
                  items
                </div>
                <div>
                  <AddLocationOutlinedIcon
                    className="jr_icon"
                    color="primary"
                  />
                  items
                </div>
              </Stack>
            </Typography>
          </div>

          <div>
            <p className="jr_sky jr_f12">
              <AddLocationOutlinedIcon className="jr_icon " color="primary" />
              Lumphini, Pathumwan, Bangkok (Ploenchit)
            </p>
            <p className="jr_sky jr_f12">
              <AddLocationOutlinedIcon className="jr_icon" color="primary" />
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
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ border: "1px solid gray", borderStyle: "none none none solid" }}
        >
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Product_item;
