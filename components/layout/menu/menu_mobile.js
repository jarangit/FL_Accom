import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Div = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    .nav_grid {
      text-align: center;
      align-items: center;
    }
  }
`;

const Div_mb_menu = styled.div`
  height: ${(props) => props.open || "0vh"};
  background-color: white;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  overflow: hidden;
  div {
    padding: 10px 0;
  }
  .header_menu {
    padding: 25px 0;
    border: 1px solid gray;
    border-style: none none solid none;
    max-width: 200px;
    margin: 0 auto;
  }
  .menu_item {
    .main_menu {
      padding: 10px 20px;
      
    }
  }
  .menu_item:hover .sub_menu {
    display: block;
  }
  .sub_menu {
    display: none;
    padding: 0px;
    transition: 0.5s;
    a {
      display: block;
      margin: 10px 0;
    }
  }
`;

const Menu_mobile = () => {
  const [open_md_menu, setopen_md_menu] = useState(false);

  return (
    <Div style={{ paddingLeft: "16px" }}>
      <Grid container className="nav_grid">
        <Grid item xs={2} sx = {{ textAlign: "left" }} >
          {open_md_menu === true ? (
            <CloseIcon
              fontSize="large"
              color="primary"
              onClick={() => setopen_md_menu(!open_md_menu)}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              color="primary"
              onClick={() => setopen_md_menu(!open_md_menu)}
            />
          )}
        </Grid>
        <Grid item xs={8}>
          {" "}
          <img
            src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
            width="80"
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Div_mb_menu
        open={open_md_menu === true ? "100vh" : ""}
        display={open_md_menu === true ? "block" : "none"}
      >
        <Stack direction="column" textAlign="center">
          <p className="header_menu">Menus</p>
          <div className="menu_item">
            <p className="main_menu" href="#">
              Rents
              <span style = {{ position: "absolute", right: "15px"}} >
                <ArrowDropDownIcon/>
              </span>
            </p>
            <div className="sub_menu">
              <a href="#">House for rent in Bangkok</a>
              <a href="#">House for rent in Bangkok</a>
              <a href="#">House for rent in Bangkok</a>
              <a href="#">House for rent in Bangkok</a>
            </div>
          </div>
       
        </Stack>
      </Div_mb_menu>
    </Div>
  );
};

export default Menu_mobile;
