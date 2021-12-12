import { Grid } from "@mui/material";
import React from "react";
import Filter_bar from "./filter";
import Footer from "./footer";
import History from "./history";
import Menu from "./menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Grid container columnSpacing={2} className="jr_container">
        <Grid item sx = {12} sm = {9}>
        {children}
        </Grid>
        <Grid item sx = {12} sm = {3}>
          <History/>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
