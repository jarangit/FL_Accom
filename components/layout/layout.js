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
      <Grid container spacing={2} className="jr_container">
        <Grid item xs={12} sm={8} >
          {children}
        </Grid>
        <Grid item xs={12} sm={4}>
          <History />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
