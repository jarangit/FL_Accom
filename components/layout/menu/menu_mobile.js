import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const Div = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Div_mb_menu = styled.div`
  display: ${(props) => props.display || "none"};
  height: ${(props) => props.open || "0vh"};
  background-color: white;
  position: relative;
  z-index: 1;
  transition: 0.5s;
`;

const Menu_mobile = () => {
  const [open_md_menu, setopen_md_menu] = useState(false);

  return (
    <Div style={{ paddingLeft: "16px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <MenuIcon
          fontSize="large"
          color="primary"
          onClick={() => setopen_md_menu(!open_md_menu)}
        />
        <img
          src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
          width="80"
        />
        <div></div>
      </Stack>

      <Div_mb_menu
        open={open_md_menu === true ? "100vh" : ""}
        display={open_md_menu === true ? "block" : "none"}
      >
        <Stack direction="column" textAlign="center">
            <h3>Menu</h3>
          <div id="link_items" className="dropdown link_items">
            <a className="but_blue_menuP " href="#">
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
          <div className="dropdown link_items">
            <a className="but_blue_menuP " href="#">
              Buy
            </a>
            <div className="dropdown-content ">
              <Typography variant="h4">Bangkok, Thailand</Typography>
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
              <Typography variant="h4">Bangkok, Thailand</Typography>
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
