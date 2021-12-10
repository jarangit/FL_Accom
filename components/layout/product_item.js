import React from "react";
import { Grid, Typography } from "@mui/material/";
const Product_item = () => {
  return (
    <div>
      <Grid container spacing={1} sx = {{ 
          border: "1px solid #dbdbdb",
          margin: "10px 0",
          padding: "5px"

       }} >
        <Grid item xs={12} sm={4}>
          <img src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png" width="100%"/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h3" color="primary">
            Property for sale in Bangkok, Thailand
          </Typography>
          <Typography variant="h4">
            4,200 properties available on Accomasia for sale in Bangkok,
            Thailand
          </Typography>
          <Typography variant="body1">
            Explore 3,134 properties for sale in Bangkok. View 360 , full
            details. Update new properties. Talk and tour properties with our
            expert agents / AccomAsia team
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h4">FOR SALE</Typography> <li>7200</li>
          <Typography variant="h4">FOR SALE</Typography> <li>7200</li>
          <Typography variant="h4">Code: AA64564</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product_item;
