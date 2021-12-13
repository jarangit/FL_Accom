import React from "react";
import { Grid } from "@mui/material";
const ProD_items_his = () => {
  const fake_data = [
    {
      image:
        "https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png",
      name: "Langsuan ville",
      des: "491.96 SQ.M. | 3 beds | 3+1 baths",
      price: 77000000,
    },
    {
      image:
        "https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png",
      name: "Langsuan ville",
      des: "491.96 SQ.M. | 3 beds | 3+1 baths",
      price: 77000000,
    },
    {
      image:
        "https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png",
      name: "Langsuan ville",
      des: "491.96 SQ.M. | 3 beds | 3+1 baths",
      price: 77000000,
    },
    {
      image:
        "https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png",
      name: "Langsuan ville",
      des: "491.96 SQ.M. | 3 beds | 3+1 baths",
      price: 77000000,
    },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        {fake_data.map((items, key) => (
          <>
            <Grid item sx={12} sm={5} >
              <img
                src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png"
                width="100%"
              />
            </Grid>
            <Grid item sx={12} sm={7}>
              <p>Langsuan ville</p>
              <p className="jr_f12">491.96 SQ.M. | 3 beds | 3+1 baths</p>
              <strong className="jr_f12">for sale</strong>
              <p className="text_color_sky">
                <strong>฿ 77,000,000</strong>
              </p>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default ProD_items_his;
