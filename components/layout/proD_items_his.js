import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

const Div_image = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  margin: 5px 0;
  transition: transform 0.2s; /* Animation */
  text-align: center;
  :hover {
    overflow: hidden;

    .image_thumb {
      transform: scale(1.09);
      transition: transform 0.5s; /* Animation */
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
        <a href="#" key={key}>
          <Grid container spacing={2} >
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
              <p className="jr_f14">Langsuan ville</p>
              <p className="jr_f14">491.96 SQ.M. | 3 beds | 3+1 baths</p>
              <p className="jr_f14 jr_blod">for sale</p>
              <p className="text_color_sky jr__f16 jr_blod">฿ 77,000,000</p>
            </Grid>
          </Grid>
        </a>
      ))}
    </>
  );
};

export default ProD_items_his;
