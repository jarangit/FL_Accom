import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

const Div = styled.div`
  background-color: #f9f9f9;
  padding: 0 60px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  a {
    padding: 8px 15px;
    border-radius: 5px;
    display: inline-block;
  }
  a:hover,
  .dropdown:hover .but_blue_menuP {
    background-color: #65acf0;
    transition: 0.51s;
    color: white;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.3);
    z-index: 2;
    min-width: 160px;
    text-align: left;
    /* margin-top: 5px; */

    h4 {
      padding: 12px 16px;
    }
    a {
      display: block;
      padding: 12px 16px;
      text-align: left;
      color: gray;
    }
    a:hover {
      background-color: #f1f1f1;
    }
  }
  .dropdow {
    display: inline-block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* .but_blue_menuP {
    padding: 8px 15px;
    border-radius: 5px;
    display: inline-block;
  }
  .but_blue_menuP:hover {
    background-color: #65acf0;
    transition: 0.51s;
    color: white;
  } */
`;
const Menu = () => {
  return (
    <Div className="jr_container">
      <Stack
        spacing={5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <img
          src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
          width="80"
        />
        <div className="dropdown">
          <a className="but_blue_menuP " href="/">
            Rent
          </a>
          <div className="dropdown-content">
            <Typography variant="h4">Bangkok, Thailand</Typography>
            <a href="#">House for rent in Bangkok</a>
            <a href="#">House for rent in Bangkok</a>
            <a href="#">House for rent in Bangkok</a>
            <a href="#">House for rent in Bangkok</a>
          </div>
        </div>
        <a href="/">Buy</a>
        <a href="/">Projects</a>
      </Stack>
      <Stack
        spacing={5}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        textAlign="right"
      >
        <a href="/">Guide</a>
        <a href="/">Agent partner</a>
        <a href="/">Eng</a>
        <button className="but_blue">Sign in</button>
      </Stack>
    </Div>
  );
};

export default Menu;
