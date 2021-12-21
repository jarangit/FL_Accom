import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Copy_right from "./copy_right";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Contact_me_form from "../form/contact_me_form";
import styled from "styled-components";

const Div = styled.div`
  background: #002161;
  /* padding: 30px; */
  color: white;
  background-image: url("https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/1F095857-D1A6-4777-8096-822C23A94A11.png");
  background-size: cover;
`;
const Footer = () => {
  return (
    <Div>
      <div className="jr_container">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h1" className="jr_sky">
              <strong> Send your message to AccomAsia agent</strong>
            </Typography>
            <Typography variant="h2">
              Talk with our agent team, we’re here for you.
            </Typography>
            <Stack mt={4} mb={4} direction="column" spacing={2}>
              <div>
                <p>
                  <span style={{ marginRight: "10px" }}>
                    <EmailOutlinedIcon className="jr_icon" />
                  </span>
                  inquiry@accomasia.co.th
                </p>
              </div>
              <div>
                <p>
                  <span style={{ marginRight: "10px" }}>
                    <PhoneAndroidOutlinedIcon className="jr_icon" />
                  </span>
                  (662) 367 5321{" "}
                </p>
              </div>
              <div>
                <p>
                  <span style={{ marginRight: "10px" }}>
                    <LocalPhoneOutlinedIcon className="jr_icon" />
                  </span>
                  (668) 1422-1412{" "}
                </p>
              </div>
            </Stack>

            <div>
              <p>
                Accom Asia Co, Ltd <br />
                3388/93 Sirinrat Building, floor 25 <br />
                Rama 4 Road, Klongton, Klongtoey, <br />
                Bangkok 101100
              </p>
            </div>

            <Stack direction="row" spacing={2} mt={4} mb={4}>
              <YouTubeIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <img
                src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/EA3365E2-4164-4014-BA64-A75404BED7EA.png"
                width="30px"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Contact_me_form />
          </Grid>
        </Grid>
        <Copy_right />
      </div>
    </Div>
  );
};

export default Footer;
