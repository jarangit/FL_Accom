import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Copy_right from "./copy_right";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Contact_me_form from "../form/contact_me_form";
const Footer = () => {
  return (
    <div style={{ background: "#002161", padding: "30px", color: "white" }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md = {6} sm={8}>
          <Typography variant="h2" className="jr_sky">
            Send your message to AccomAsia agent
          </Typography>
          <Typography variant="h3">
            Talk with our agent team, we’re here for you.
          </Typography>
          <Stack mt={4} mb={4} direction="column" spacing={2}>
            <div>
              <EmailOutlinedIcon className="jr_icon" /> inquiry@accomasia.co.th
            </div>
            <div>
              <LocalPhoneOutlinedIcon className="jr_icon" />
              (662) 367 5321
            </div>
            <div>
              <PhoneAndroidOutlinedIcon className="jr_icon" /> (668) 1422-1412
            </div>
          </Stack>

          <div>
            <p>
              Accom Asia Co, Ltd <br />
              3388/93 Sirinrat Building, floor 25 <br />
              Rama 4 Road, Klongton, Klongtoey, <br />
              Bangkok 10110000
            </p>
          </div>

          <Stack direction="row" spacing={2} mt = {4} mb ={4} >
            <FacebookIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
          </Stack>
        </Grid>
        <Grid item xs={12} md = {6} sm={4}>
          <Contact_me_form/>
        </Grid>
      </Grid>
      <Copy_right />
    </div>
  );
};

export default Footer;
