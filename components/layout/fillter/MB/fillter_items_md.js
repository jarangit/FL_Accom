import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FakeData_filter_menu_md } from "../../../../fakeData/filter_menu_md";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Checkbox } from "@mui/material";
import From_checkBox_md from "./from_checkBox_md";
import { AuthContext } from "../../../../appState/authProviceder";
import CloseIcon from "@mui/icons-material/Close";
import Price_range_sub_menu from "../price_range_sub_menu";
import Price_range_mb from "./price_range_mb";
import Beds_option_mb from "./beds_option_mb";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Bathroom_section from "./bathroom_section";
const Section_menu = styled.div`
  background-color: white;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  overflow: hidden;
  /* height: 100vh; */
  overflow: hidden;
  text-align: center;
  justify-content: center;

  .menu_item {
    padding: 11px 0;
    position: relative;
    :hover {
      background: rgba(101, 172, 240, 0.2);
    }
  }
  .arrow_icon {
    position: absolute;
    transition: 0.3s;
    right: 15px;
  }
  .arrow_icon::before {
    background-image: url("https://i.ibb.co/NxhY2hK/arrow-close.png");
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: cover;
    transition: 0.2s;

  }
  .menu_item.active .arrow_icon::before {
    background-image: url("https://i.ibb.co/CK4mbLR/arrow-open.png");
  }
  .jr_icon_fillter {
    position: absolute;
    right: 0;
  }
`;

const Div = styled.div`
  background-color: white;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  overflow: hidden;
  min-height: 100vh;
`;
const Fillter_items_md = () => {
  const {
    openFilter_mb,
    setopenFilter_mb,
    open_form_filter_mb,
    setopen_form_filter_mb,
  } = useContext(AuthContext);
  const [get_name_sub, setget_name_sub] = useState("");
  console.log(openFilter_mb);

  const onOpen_dropdown = (e) => {
    console.log(e.target.id);
    if (e.target.id !== get_name_sub) {
      setopenFilter_mb(true);
    } else {
      setopenFilter_mb(!openFilter_mb);
    }
    setget_name_sub(e.target.id);
  };

  const ShowSubMenu = (props) => {
    if (props.data.name === "Price") {
      return <Price_range_mb />;
    } else if (props.data.name === "Beds") {
      return (
        <div style={{ padding: "0 15px"}} >
          <Beds_option_mb />
        </div>
      )
    } else {
      return <From_checkBox_md dataSub={props.data} />;
    }
  };
  return (
    <Div>
      <Section_menu>
        <div className="header jr_color_primary">
          <strong>Filters</strong>
        </div>

        <div>
          <div className="main_ul">
            {FakeData_filter_menu_md.map((items, key) => (
              <div key={key}>
                <p
                  href="#"
                  id={items.name}
                  onClick={onOpen_dropdown}
                  // className="jr_f16 menu_item active"
                  className={
                    items.name === get_name_sub && openFilter_mb
                      ? "r_f16 menu_item active"
                      : "jr_f16 menu_item "
                  }
                >
                  {items.name}
                  <span className="arrow_icon"></span>
                </p>
                {openFilter_mb && (
                  <>
                    {items.name === get_name_sub ? (
                      <ShowSubMenu data={items} />
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section_menu>
      <Bathroom_section />
    </Div>
  );
};

export default Fillter_items_md;
