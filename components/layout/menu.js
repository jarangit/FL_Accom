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
import Menu_mobile from "./menu/menu_mobile";
import Fillter_mb from "./fillter/fillter_mb";

const Div = styled.div`
  background-color: #f9f9f9;
  /* height: 100px; */
  .jr_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 2;
    min-width: 160px;
    text-align: left;
    /* margin-top: 5px; */

    h4 {
      padding: 12px 16px;
      color: black;
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
    background-color: red;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media (max-width: 768px) {
    .dt_menu {
      display: none;
    }
    .md_menu {
      display: block;
    }
    img {
      text-align: center;
    }
  }
`;
const Menu = () => {
  return (
    <>
      <Menu_mobile />
      <Div>
        <div className="jr_container  dt_menu">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <img
              src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
              width="80"
            />
            <div id="link_items" className="dropdown link_items">
              <a className="but_blue_menuP " href="#">
                Rent
              </a>
              <div className="dropdown-content">
                <Typography variant="h4">
                  <strong>Bangkok, Thailand</strong>
                </Typography>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
              </div>
            </div>
            <div className="dropdown link_items">
              <a className="but_blue_menuP " href="#">
                Buy
              </a>
              <div className="dropdown-content ">
                <Typography variant="h4">
                  <strong>Bangkok, Thailand</strong>
                </Typography>{" "}
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
              </div>
            </div>
            <div className="dropdown link_items">
              <a className="but_blue_menuP " href="#">
                Projects
              </a>
              <div className="dropdown-content">
                <Typography variant="h4">
                  <strong>Bangkok, Thailand</strong>
                </Typography>{" "}
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
                <a href="#">House for rent in Bangkok</a>
              </div>
            </div>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
            textAlign="right"
          >
            <a className="link_items" href="#">
              Guide
            </a>
            <div className="dropdown link_items">
              <a className="but_blue_menuP " href="#">
                Agent parter
              </a>
              <div className="dropdown-content">
                <Typography variant="h4">
                  <strong>Rental management</strong>
                </Typography>{" "}
                <a href="#">List your property</a>
              </div>
            </div>

            <div className="dropdown link_items">
              <a className="link_items" href="#">
                Eng
                <LanguageIcon sx={{ verticalAlign: "middle" }} />
              </a>
              <div className="dropdown-content">
                <a href="#">Eng</a>
                <a href="#">TH</a>
              </div>
            </div>
            <button className="but_blue link_items">Sign in</button>
          </Stack>
        </div>
      </Div>
    </>
  );
};

export default Menu;
