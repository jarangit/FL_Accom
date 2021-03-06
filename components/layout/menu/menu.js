import {
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
import Menu_mobile from "./menu_mobile";
import { FakeData_menu_pc } from "../../../fakeData/menu_pc";
import Image from 'next/image'
// import Logo_svg from '../../../lib/img/svg/logo.svg'
import Icon from '../../../lib/img/svg/logo'

const Div = styled.div`
  background-color: #f9f9f9;
  /* height: 100px; */
  .jr_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .sub_menu {
    padding: 8px 15px;
    border-radius: 5px;
    display: inline-block;
  }
  .sub_menu:hover,
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

    .head_text {
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

  @media (max-width: 1024px) {
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
            <a href="https://www.accomasia.co.th/">
            <Icon fill="#9a9a9a" width={100} height={100} />
              {/* <Image src="C:\Users\Jaran\Documents\Work\Dev\FL\asscom\React\my-app\lib\img\logo.svg" width="2000" height="2000" /> */}
              {/* <img
                src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
                width="80"
              /> */}
            </a>
            {FakeData_menu_pc.map((items, key) => (
              <div id="link_items" className="dropdown link_items" key={key}>
                <a className="but_blue_menuP sub_menu " href="#">
                  {items.name}
                </a>
                <div className="dropdown-content">
                  <p className="jr_blod head_text">{items.head}</p>

                  {items.sub_item.map((sub_items, key) => (
                    <a href={sub_items.url} key={key}>
                      {sub_items.sub_name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
            textAlign="right"
          >
            <a className="link_items sub_menu" href="#">
              Guide
            </a>
            <div className="dropdown link_items">
              <a className="but_blue_menuP sub_menu" href="#">
                Agent parter
              </a>
              <div className="dropdown-content">
                <p className="jr_blod head_text">
                  <strong>Rental management</strong>
                </p>{" "}
                <a href="#">List your property</a>
                <a href="#">My listings</a>
                <a href="#">Add new project</a>
                <hr />
                <a href="">Log in</a>
              </div>
            </div>

            <div className="dropdown link_items">
              <a className="link_items sub_menu" href="#">
                Eng
                <LanguageIcon sx={{ verticalAlign: "middle" }} />
              </a>
              <div className="dropdown-content">
                <a href="#">Eng</a>
                <a href="#">TH</a>
              </div>
            </div>
            <Button variant="contained" sx={{ background: "#65ACF0" }}>
              Sign in
            </Button>
          </Stack>
        </div>
      </Div>
    </>
  );
};

export default Menu;
