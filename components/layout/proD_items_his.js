import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

const Div_image = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin: 2px 0;
  transition: transform .2s; /* Animation */
  :hover {
    overflow: hidden;

    .image_thumb {
      transform: scale(1.1);
      transition: transform .2s; /* Animation */

    }
  }
`;
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
    <>
      {fake_data.map((items, key) => (
        <Grid container spacing={2} key={key}>
          <Grid item xs={5} sm={5}>
            <Div_image>
              <img
                src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png"
                width="100%"
                className="image_thumb"
              />
            </Div_image>
          </Grid>
          <Grid item xs={7} sm={7}>
            <p>Langsuan ville</p>
            <p className="jr_f12">491.96 SQ.M. | 3 beds | 3+1 baths</p>
            <strong className="jr_f12">for sale</strong>
            <p className="text_color_sky">
              <strong>฿ 77,000,000</strong>
            </p>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default ProD_items_his;
