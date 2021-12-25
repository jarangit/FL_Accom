import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FakeData_filter_menu_md } from "../../fakeData/filter_menu_md";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Checkbox } from "@mui/material";
import From_checkBox_md from "./from_checkBox_md";
import { AuthContext } from "../../../appState/authProviceder";
import CloseIcon from "@mui/icons-material/Close";
import Price_range_sub_menu from "./price_range_sub_menu";
import Price_range_mb from "./MB/price_range_mb";
import Beds_option_mb from "./MB/beds_option_mb";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Bathroom_section from "./MB/bathroom_section";
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
  ul {
    padding: 0;
  }
  .main_ul {
    li {
      margin: 25px 0;
    }
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
      return <Beds_option_mb />;
    } else {
      return <From_checkBox_md dataSub={props.data.options_menu} />;
    }
  };
  return (
    <Div>
      <Section_menu>
        <div
          style={{
            position: "absolute",
            left: "0",
          }}
        >
          <CloseIcon
            className="jr_icon"
            onClick={() => setopen_form_filter_mb(!open_form_filter_mb)}
          />
        </div>
        <div className="header">
          <strong>Filters</strong>
        </div>

        <div>
          <ul className="main_ul">
            {FakeData_filter_menu_md.map((items, key) => (
              <li key={key}>
                <strong id={items.name} onClick={onOpen_dropdown}>
                  {items.name}
                </strong>
                <img
                  className="jr_icon_fillter"
                  src="https://i.ibb.co/NxhY2hK/arrow-close.png"
                  width="20px"
                />
                {openFilter_mb && (
                  <>
                    {items.name === get_name_sub ? (
                      <ShowSubMenu data={items} />
                    ) : (
                      ""
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section_menu>
      <Bathroom_section />
    </Div>
  );
};

export default Fillter_items_md;
