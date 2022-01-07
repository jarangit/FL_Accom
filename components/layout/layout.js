import { Grid } from "@mui/material";
import React from "react";
import Fillter_mb from "./fillter/MB/fillter_mb";
import Filter_bar from "./fillter/filter";
import Footer from "./footer/footer";
import History from "./side-bar/history";
import Menu from "./menu/menu";
import Properties_for_sale from "./side-bar/properties_for_sale";
import Ultimate_guide from "./items/ultimate_guide";
import HotProperty from "./side-bar/hotproperty";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Fillter_mb/>

      <div className="jr_container">
        <Grid container spacing={2}>
          <Grid item lg={9} md = {12}>
            <Filter_bar />
          </Grid>
        </Grid>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} lg={8} md = {12}>
            {children}
          </Grid>
          <Grid item xs={12} lg={4} md = {12}>
            <History />
            <Ultimate_guide />
            <Properties_for_sale />
            <HotProperty/>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
