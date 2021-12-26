import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FakeData_menu_mb } from "../../fakeData/menu_mb";
import LanguageIcon from "@mui/icons-material/Language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
const Div = styled.div`
  display: none;
  .modal {
    display: block;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: ${(props) =>
      props.display_show === true ? "100%" : "0"}; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    transition: 0.5s;
  }

  /* Modal Content */
  .modal_content {
    background-color: white;
    margin: auto;
    width: 100%;
    min-height: 100vh;
  }
  @media (max-width: 1024px) {
    display: block;
    .nav_grid {
      padding: 0 10px;
      text-align: center;
      align-items: center;
    }
  }
`;

const Div_mb_menu = styled.div`
  background-color: white;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  overflow: hidden;
  div {
    padding: 10px 0;
  }
  .header_menu {
    padding: 10px 50px;
    border: 2px solid #d8d8d8;
    border-style: none none solid none;
    max-width: 200px;
    margin: 0 auto;
  }
  .menu_item {
    .main_menu {
      padding: 10px 20px;
      :hover {
        background: rgba(101, 172, 240, 0.2);
        .arrow_icon {
          transition: 0.3s;
          cursor: pointer;
          -ms-transform: ${(props) => props.toggle === true ? "rotate(180deg)":"rotate(0)"};
          transform: rotate(180deg);
        }
      }
    }
  }
  .sub_menu {
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
    <Div display_show={open_md_menu}>
      <div className="modal">
        <div className="modal_content">
          <Grid container className="nav_grid">
            <Grid item xs={2} sx={{ textAlign: "left" }}>
              <FontAwesomeIcon
                style={{ fontSize: "31" }}
                icon={faTimes}
                onClick={() => setopen_md_menu(!open_md_menu)}
              />
            </Grid>
            <Grid item xs={8}>
              <img
                src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
                width="75"
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <Div_mb_menu toggle = {toggle_subMenu}>
            <Stack direction="column" textAlign="center">
              <p className="header_menu jr_f14">Menus</p>
              {FakeData_menu_mb.map((items, key) => (
                <div className="menu_item" key={key}>
                  <p
                    id={items.name}
                    className="main_menu jr_f18"
                    href="#"
                    onClick={onOpenSub}
                  >
                    {items.name}
                    <span
                      className="arrow_icon"
                      style={{ position: "absolute", right: "15px" }}
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: "19" }}
                        icon={faChevronDown}
                      />
                    </span>
                  </p>
                  {toggle_subMenu && (
                    <>
                      {items.name === get_name_sub ? (
                        <>
                          {items.sub_item.map((itemSub, key) => (
                            <div className="sub_menu jr_f16" key={key}>
                              <a href="#">{itemSub}</a>
                            </div>
                          ))}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
              ))}
              <div>
                <p className="main_menu" href="#">
                  Guide
                </p>
              </div>
              <div
                className="main_menu header_menu"
                href="#"
                onClick={onOpenSub}
                id="eng"
              >
                Eng <LanguageIcon sx={{ verticalAlign: "middle" }} />
                <span style={{ position: "absolute", right: "15px" }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "19" }}
                    icon={faChevronDown}
                  />
                </span>
                {toggle_subMenu && (
                  <>
                    {get_name_sub === "eng" ? (
                      <div className="sub_menu jr_f16">
                        <a href="#">Eng</a>
                        <a href="#">ภาษาไทย</a>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
              <div>
                <p className="main_menu" href="#">
                  Sign in
                </p>
              </div>
            </Stack>
          </Div_mb_menu>
        </div>
      </div>
      <Grid container className="nav_grid">
        <Grid item xs={2} sx={{ textAlign: "left" }}>
          <FontAwesomeIcon
            style={{ fontSize: "31" }}
            icon={faBars}
            onClick={() => setopen_md_menu(!open_md_menu)}
          />
        </Grid>
        <Grid item xs={8}>
          <img
            src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
            width="75"
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Div>
  );
};

export default Menu_mobile;
