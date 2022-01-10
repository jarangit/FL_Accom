import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
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
const ProD_items_his = (props) => {
  console.log(props);

  return (
    <>
      {props.data ? (
        <>
          {props.data.hotproperty.map((items, key) => (
            <a href = {items.link} key={key}>
              <Grid container spacing={2}>
                <Grid item xs={5} sm={5}>
                  <Div_image>
                    {/* <Image
                      src="https://i.ibb.co/1RDJj8Y/1.png"
                      width={180}
                      height={140}
                      className="image_thumb"
                    /> */}
                    <img
                  src={items.photo}
                  // width="180"
                  height="140"
                  className="image_thumb"
                />
<<<<<<< HEAD
                  </Div_image>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <p className="jr_f14">{items.property_name}</p>
                  <p className="jr_f14">{`${items.landvalue} | ${items.bedroom} beds | ${items.bathroom} baths`}</p>
                  <p className="jr_f14 jr_blod">{items.purpose}</p>
                  <p className="text_color_sky jr__f16 jr_blod">{`฿ ${items.rent_price}`}</p>
                </Grid>
              </Grid>
            </a>
          ))}
        </>
      ) : (
        ""
      )}
=======
                {/* <img
                  src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/CCC24B5E-39B2-49B4-826C-0FF410C11756.png"
                  width="135"
                  className="image_thumb"
                /> */}
              </Div_image>
            </Grid>
            <Grid item xs={7} sm={7}>
              <p className="jr_f16">Langsuan ville</p>
              <p className="jr_f14">491.96 SQ.M. | 3 beds | 3+1 baths</p>
              <p className="jr_f14 jr_blod">for sale</p>
              <p className="text_color_sky jr__f16 jr_blod">฿ 77,000,000</p>
            </Grid>
          </Grid>
        </a>
      ))}
>>>>>>> main
    </>
  );
};

export default ProD_items_his;
