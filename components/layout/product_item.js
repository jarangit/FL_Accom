import React from "react";
import { Grid, Stack, Typography } from "@mui/material/";
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
          padding: "5px"
        }}
      >
        <Grid item xs={12} sm={4} justifyContent="center">
          <img
            src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="primary">
            Property for sale in Bangkok, Thailand
          </Typography>
          <Typography variant="h4">
            4,200 properties available on Accomasia for sale in Bangkok,
            Thailand
          </Typography>
        <div>
        <Typography variant="body1">
            <Stack direction="row" spacing={2}>
              <div>items</div>
              <div>items</div>
              <div>items</div>
            </Stack>
          </Typography>
        </div>

          <div>
            <p className="jr_sky">Lumphini, Pathumwan, Bangkok (Ploenchit)</p>
            <p className="jr_sky">BTS Chitlom ( 500 M )</p>
          </div>

          <Typography variant="body2">
            <Stack direction="row" spacing={2}>
              <button className="jr_chip">Penthouse</button>
              <button className="jr_chip">Penthouse</button>
              <button className="jr_chip">Penthouse</button>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} sx = {{ border: "1px solid gray", borderStyle: "none none none solid" }} >
          <Typography variant="body1">
            <strong style={{ background: "#9bdeff", color: "#002161", padding: "5px 10px" }}>
              FOR SALE
            </strong>
          </Typography>
          <p>7200</p>
          <Typography variant="body1">
          <strong style={{ background: "#9bdeff", color: "#002161", padding: "5px 10px" }}>
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
