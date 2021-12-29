import { Button, Stack, Typography, Switch } from "@mui/material";
import CustomSeparator from "../components/layout/bread";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Product_item from "../components/layout/product_item";
import Nav_contact from "../components/layout/nav/nav_contact";
import Accordion_items from "../components/layout/accordion";
import Pagination_jr from "../components/layout/pagination";
import Nav_request from "../components/layout/nav/nav_request";
import Nav_call from "../components/layout/nav/nav_call";
import Alert_form from "../components/form/alert_form";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../appState/authProviceder";

export default function Home() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  function GoToReadMore() {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  }

  const { onCheckedContactForm } = useContext(AuthContext);

  return (
    <div>
      <Alert_form />
       <CustomSeparator />
      <div>
        <Typography variant="h1" className="jr_sky jr_blod">
          Property for sale in Bangkok, Thailand
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "400" }}>
          4,200 properties available on Accomasia
        </Typography>
        <p>
          Explore 3,134 properties for sale in Bangkok. View 360 , full details.
          Update new properties. Talk and tour properties with our expert agents
          / AccomAsia team
        </p>
      </div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <button className="but_primary_w" onClick={GoToReadMore}>
          Learn more
          <ArrowDownwardIcon className="jr_icon" />
        </button>
        <div>
          map
          <Switch {...label} />
        </div>
      </Stack>
      <Product_item />
      <Product_item />
      <Product_item />
      <a href="#">
        <img src="https://i.ibb.co/d7RbVn4/discount-banner.jpg" width="100%" />
      </a>
      <Product_item />
      <Product_item />
      <Nav_contact />
      <Product_item />
      <Product_item />
      <Product_item />
      <Nav_request />
      <Product_item />
      <Product_item />
      <Product_item />
      <Nav_call />
      <Product_item />
      <Pagination_jr />
      <Accordion_items />
    </div>
  );
}
