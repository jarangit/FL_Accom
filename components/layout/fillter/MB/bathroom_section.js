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
  padding: 15px;
  p {
    /* margin: 15px 0; */
  }
`;

const Section_2 = styled.div`
  text-align: center;
  padding: 15px 0;
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
`;
const Bathroom_section = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div>
      <Section_1>
        <div>
          <p>
            <strong>Bathrooms</strong>
            <Beds_option_mb />
          </p>
        </div>
        <div>
          <p>
            <strong>Usable Area (Sq.M)</strong>
          </p>
          <div>
            <select className="jr_select jr_fullWidth">
              <option className="jr_option" selected="">
                Minimun
              </option>
              <option value="">฿ 3M</option>
              <option value="">฿ 5M</option>
              <option value="">฿ 8M</option>
              <option value="">฿ 50M</option>
              <option value="">฿ 10M</option>
              <option value="">฿ 15M</option>
              <option value="">฿ 20M</option>
            </select>
          </div>
        </div>
        <div>
          <p>
            <strong>Land Size (Sq.W)</strong>
          </p>
          <div>
            <select className="jr_select jr_fullWidth">
              <option className="jr_option" selected="">
                Minimun
              </option>
              <option value="">฿ 3M</option>
              <option value="">฿ 5M</option>
              <option value="">฿ 8M</option>
              <option value="">฿ 50M</option>
              <option value="">฿ 10M</option>
              <option value="">฿ 15M</option>
              <option value="">฿ 20M</option>
            </select>
          </div>
        </div>
        <div>
          <p>
            <strong>Transportation Radius (BTS/MRT)</strong>
          </p>
          <div>
            <select className="jr_select jr_fullWidth">
              <option className="jr_option" selected="">
                Minimun
              </option>
              <option value="">฿ 3M</option>
              <option value="">฿ 5M</option>
              <option value="">฿ 8M</option>
              <option value="">฿ 50M</option>
              <option value="">฿ 10M</option>
              <option value="">฿ 15M</option>
              <option value="">฿ 20M</option>
            </select>
          </div>
        </div>
      </Section_1>

      <Section_2>
        <div>
          <p className="header">
            <strong onClick={() => settoggle(!toggle)}>Tour</strong>
            <img
              className="jr_icon"
              src="https://i.ibb.co/NxhY2hK/arrow-close.png"
              width="20px"
            />
          </p>

          {toggle && (
            <div>
              <div className="items">
                <input type="checkbox" className="checkBox_icon" />
                <span>3D tour</span>
              </div>
              <div className="items">
                <input type="checkbox" className="checkBox_icon" />
                <span>Live tour</span>
              </div>
              <div className="items">
                <input type="checkbox" className="checkBox_icon" />
                <span>Open house</span>
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
