import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FakeData_menu_mb } from "../../fakeData/menu_mb";
import LanguageIcon from "@mui/icons-material/Language";

const Div = styled.div`
  display: none;
  @media (max-width: 1024px) {
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
      :hover{
        /* background: rgba(101, 172, 240, 0.2); */
      }
    }
  }
  .sub_menu {
    /* display: none; */
    padding: 0px;
    transition: 0.5s;
    a {
      display: block;
      margin: 20px 0;
    }
  }
`;

const Menu_mobile = () => {
  const [open_md_menu, setopen_md_menu] = useState(false);
  const [toggle_subMenu, settoggle_subMenu] = useState(false);
  const [get_name_sub, setget_name_sub] = useState("");

  function onOpenSub(e) {
    console.log(e.target.id);
    if (e.target.id !== get_name_sub) {
      settoggle_subMenu(true);
    } else {
      settoggle_subMenu(!toggle_subMenu);
    }
    setget_name_sub(e.target.id);
  }
  return (
    <Div style={{ paddingLeft: "16px" }}>
      <Grid container className="nav_grid">
        <Grid item xs={2} sx={{ textAlign: "left" }}>
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
          {FakeData_menu_mb.map((items, key) => (
            <div className="menu_item" key={key}>
              <p
                id={items.name}
                className="main_menu"
                href="#"
                onClick={onOpenSub}
              >
                {items.name}
                <span style={{ position: "absolute", right: "15px" }}>
                  <ArrowDropDownIcon />
                </span>
              </p>
              {toggle_subMenu && (
                <>
                  {items.name === get_name_sub ? (
                    <>
                      {items.sub_item.map((itemSub, key) => (
                        <div className="sub_menu" key={key}>
                          <a href="#">{itemSub}</a>
                        </div>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
              {/* {items.sub_item.map((itemSub, key) => (
                <div className="sub_menu" key={key}>
                  <a href="#">{itemSub}</a>
                </div>
              ))} */}
            </div>
          ))}
          <div>
            <p className="main_menu" href="#">
              Eng <LanguageIcon sx={{ verticalAlign: "middle" }} />
              <span style={{ position: "absolute", right: "15px" }}>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
          <div>
            <p className="main_menu" href="#">
              Sign in
            </p>
          </div>
        </Stack>
      </Div_mb_menu>
    </Div>
  );
};

export default Menu_mobile;
