import { Grid } from "@mui/material";
import React from "react";
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
      <Grid container  className="jr_container">
        <Grid item xs={12} sm={8} >
          {children}
        </Grid>
        <Grid item xs={12} sm={4}>
          <History />
          <Ultimate_guide/>
          <Properties_for_sale/>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
