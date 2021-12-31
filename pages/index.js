import { Button, Stack, Typography, Switch } from "@mui/material";
import CustomSeparator from "../components/layout/items/bread";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Product_item from "../components/layout/product/product_item";
import Nav_contact from "../components/layout/nav/nav_contact";
import Accordion_items from "../components/layout/items/accordion";
import Pagination_jr from "../components/layout/items/pagination";
import Nav_request from "../components/layout/nav/nav_request";
import Nav_call from "../components/layout/nav/nav_call";
import Alert_form from "../components/form/alert_form";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../appState/authProviceder";
import styled from "styled-components";

const Div = styled.div`
  .but_readMore_mb {
    display: none;
  }
  @media (max-width: 414px) {
    .but_readMore_pc {
      display: none;
    }
    .but_readMore_mb {
      display: block;
    }
  }
`;
export default function Home() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  function GoToReadMore() {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  }
  function GoToReadMore_MB() {
    window.scrollTo({
      top: 9480,
      behavior: "smooth",
    });
  }

  return (
    <Div>
      <Alert_form />
      <CustomSeparator />
      <div>
        <h1 className="jr_sky jr_blod">
          Property for sale in Bangkok, Thailand
        </h1>
        <h2>4,200 properties available on Accomasia</h2>
        <p>
          Explore 3,134 properties for sale in Bangkok. View 360 , full details.
          Update new properties. Talk and tour properties with our expert agents
          / AccomAsia team
        </p>
      </div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <button
          className="but_primary_w but_readMore_pc"
          onClick={GoToReadMore}
        >
          Learn more
          <ArrowDownwardIcon className="jr_icon" />
        </button>
        <button
          className="but_primary_w but_readMore_mb"
          onClick={GoToReadMore_MB}
        >
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
    </Div>
  );
}
