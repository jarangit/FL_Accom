import { Grid } from "@mui/material";
import React from "react";
import Fillter_mb from "./fillter/fillter_mb";
import Filter_bar from "./filter";
import Footer from "./footer";
import History from "./history";
import Menu from "./menu";
import Show_menu_mb from "./menu/show_menu_mb";
import Properties_for_sale from "./properties_for_sale";
import Ultimate_guide from "./ultimate_guide";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="jr_container">
        <Grid container spacing={2}>
          <Grid item lg={9} md = {12}>
            <Filter_bar />
          </Grid>
        </Grid>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} lg={9} md = {12}>
            {children}
          </Grid>
          <Grid item xs={12} lg={3} md = {12}>
            <History />
            <Ultimate_guide />
            <Properties_for_sale />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
