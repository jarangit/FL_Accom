import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Checkbox } from "@mui/material";
import Beds_option_mb from "./beds_option_mb";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Section_1 = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-style: solid none solid none;
  padding: 0 15px;
  padding-bottom: 20px;
  p {
    margin: 15px 0;
  }
  .selectdiv select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("https://i.ibb.co/NxhY2hK/arrow-close.png");
    -ms-word-break: normal;
    word-break: normal;
    background-position: calc(100% - 5px) center;
    background-repeat: no-repeat;
    background-size: auto 20px;
    appearance: none;
  }
`;

const Section_2 = styled.div`
  text-align: center;
  margin-bottom: 200px;

  .but_primary {
    border-radius: 3px;
  }
  .jr_icon {
    position: absolute;
    right: 0;
  }
  .checkBox_icon {
    position: absolute;
    left: 0;
  }
  .header {
    padding: 10px;
    :hover {
      background: rgba(101, 172, 240, 0.2);
    }
  }
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
`;
const Bathroom_section = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div>
      <Section_1>
        <div>
          <p>
            Bathrooms
          </p>
            <Beds_option_mb />
        </div>
        <div>
          <p>Usable Area (Sq.M)</p>
          <div className="selectdiv">
            <select className="jr_select jr_fullWidth">
              <option className="jr_option" selected="">
                No min
              </option>
              <option value="">??? 3M</option>
              <option value="">??? 5M</option>
              <option value="">??? 8M</option>
              <option value="">??? 50M</option>
              <option value="">??? 10M</option>
              <option value="">??? 15M</option>
              <option value="">??? 20M</option>
            </select>
          </div>
        </div>
        <div>
          <p>Land Size (Sq.W)</p>
          <div className="selectdiv">
            <select className="jr_select jr_fullWidth">
              <option className="jr_option" selected="">
                No min
              </option>
              <option value="">??? 3M</option>
              <option value="">??? 5M</option>
              <option value="">??? 8M</option>
              <option value="">??? 50M</option>
              <option value="">??? 10M</option>
              <option value="">??? 15M</option>
              <option value="">??? 20M</option>
            </select>
          </div>
        </div>
        <div>
          <p>Transportation Radius (BTS/MRT)</p>
          <div className="selectdiv">
            <select className="jr_select jr_fullWidth">
              <option className="jr_option" selected="">
                No min
              </option>
              <option value="">??? 3M</option>
              <option value="">??? 5M</option>
              <option value="">??? 8M</option>
              <option value="">??? 50M</option>
              <option value="">??? 10M</option>
              <option value="">??? 15M</option>
              <option value="">??? 20M</option>
            </select>
          </div>
        </div>
      </Section_1>

      <Section_2>
        <div>
          <p
            // className="header menu_item"
            className={toggle ? "header menu_item active" : "header menu_item"}
            onClick={() => settoggle(!toggle)}
          >
            Tour
            <span className="arrow_icon"></span>
          </p>

          {toggle && (
            <div>
              <div className="items">
                <label>
                  <input type="checkbox" className="checkBox_icon" />
                  <span>3D tour</span>
                </label>
              </div>
              <div className="items">
                <label>
                  <input type="checkbox" className="checkBox_icon" />
                  <span>Live tour</span>
                </label>
              </div>
              <div className="items">
                <label>
                  <input type="checkbox" className="checkBox_icon" />
                  <span>Open house</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <button id="save_search" className="but_primary">
          Save Search
          <FavoriteBorderIcon
            sx={{ verticalAlign: "middle", marginLeft: "5px" }}
          />
        </button>
      </Section_2>
    </div>
  );
};

export default Bathroom_section;
