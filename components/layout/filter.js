import React, { useState } from "react";
import {
  TextField,
  SearchIconWrapper,
  StyledInputBase,
  Box,
  Button,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";
import styled from "styled-components";
import CircleIcon from "@mui/icons-material/Circle";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Price_range_sub_menu from "./fillter/price_range_sub_menu";
import Bads_sub_menu from "./fillter/bads_sub_menu";
import Fillter_but_item from "./fillter/fillter_but_item";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Search_input from "./fillter/search_input";
const Div = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;

  .jr_icon_inside_input {
    position: absolute;
    right: 65px;
    top: 0;
    font-size: 25px;
    color: #d8d8d8;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jr_icon_dot {
    opacity: 0;
    transition: 0.5s;
    margin-right: 2px;
  }
  .input_search {
    border-radius: 8px;
    border: 1px solid #d8d8d8;
    padding: 11px;
    min-width: 250px;
    margin: 0px;
  }
  .but_search {
    /* font-size: 1.25rem; */
    border: 1px solid #002161;

    border-radius: 8px;
    position: relative;
    left: -10px;
    z-index: 1;
    padding: 11px;
    background-color: #002161;
    color: white;
    width: auto;
    padding-top: -5px;
  }
  .but_menu {
    padding: 10px 5px;
    background-color: white;
  }
  .but_menu:hover {
    .jr_icon_dot {
      opacity: 1;
    }

    background-color: red;
    border-radius: 8px;
    background-color: rgba(101, 172, 240, 0.2);
    transition: 0.5s;
  }
  .but_menu:hover.dropdown-content {
    display: none;
  }
  .dropdown-content {
    padding: 8px 16px;
    min-width: 300px;
  }

  @media (max-width: 1024px) {
    .dropdown_jr,
    #save_search {
      display: none;
    }
    .hid_mb {
      display: none;
    }
  }
`;

const Filter_bar = () => {
  const [toggle, settoggle] = useState(false);
  const [getName_main_menu, setgetName_main_menu] = useState("");
  const menu_api = [
    {
      name: "Rent",
      sub_menu: ["Rent", "Sale"],
    },
    {
      name: "Property type",
      sub_menu: ["Condominium", "Apartment", "House"],
    },
    {
      name: "Price range",
      sub_menu: "",
    },
    {
      name: "Bads",
      sub_menu: "",
    },
  ];

  const onOpen_dropdown = (e) => {
    console.log(e.target.name);
    if (e.target.name !== getName_main_menu) {
      settoggle(true);
    } else {
      settoggle(!toggle);
    }
    setgetName_main_menu(e.target.name);
  };
  // console.log(getName_main_menu);

  const ShowDropDown = (props) => {
    console.log(props.dataSub);
    if (props.dataSub.name === "Price range") {
      return (
        <div className="dropdown-content">
          <Price_range_sub_menu />
        </div>
      );
    } else if (props.dataSub.name === "Bads") {
      return (
        <div className="dropdown-content">
          <Bads_sub_menu />
        </div>
      );
    } else if (props.dataSub === "but_fillter") {
      return (
        <div className="dropdown-content">
          <Fillter_but_item />
        </div>
      );
    } else {
      return (
        <div className="dropdown-content">
          <Typography variant="h4">Bangkok, Thailand</Typography>
          <FormGroup>
            {props.dataSub && (
              <>
                {props.dataSub.sub_menu.map((sub_items, key) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        icon={<CircleOutlinedIcon />}
                        checkedIcon={<CircleIcon />}
                      />
                    }
                    label={sub_items}
                  />
                ))}
              </>
            )}
          </FormGroup>
        </div>
      );
    }
  };

  return (
    <Div className="jr_mb_close">
      <div>
        <Search_input />
      </div>
      {menu_api.map((items, key) => (
        <div className="dropdown_jr" key={key}>
          <button
            name={items.name}
            className="but_menu"
            onClick={onOpen_dropdown}
          >
            <CircleIcon
              className="jr_icon_dot"
              sx={{
                fontSize: "10px",
                color: "#65acf0",
                verticalAlign: "middle",
              }}
            />
            {items.name}

            {toggle ? (
              <span>
                {items.name === getName_main_menu ? (
                  <img
                    className="jr_icon"
                    src="https://i.ibb.co/CK4mbLR/arrow-open.png"
                    width="20px"
                  />
                ) : (
                  <img
                    className="jr_icon"
                    src="https://i.ibb.co/NxhY2hK/arrow-close.png"
                    width="20px"
                  />
                )}
              </span>
            ):(
              <img
              className="jr_icon"
              src="https://i.ibb.co/NxhY2hK/arrow-close.png"
              width="20px"
            />
            )}
          </button>
          {toggle && (
            <div>
              {items.name === getName_main_menu ? (
                <ShowDropDown dataSub={items} />
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ))}

      <div className="dropdown_jr">
        <button
          name="but_fillter"
          className="but_primary_w"
          onClick={onOpen_dropdown}
        >
          Filters
          <img
            src="https://i.ibb.co/bgk0qT9/icon-filter.png"
            width="20"
            className="jr_icon"
          />
          {/* <SyncAltIcon
            sx={{ verticalAlign: "middle", marginLeft: "5px", zIndex: "0" }}
            color="primary"
            onClick={onOpen_dropdown}
          /> */}
        </button>
        <div>
          {toggle && (
            <div>
              {getName_main_menu === "but_fillter" ? (
                <ShowDropDown dataSub="but_fillter" />
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
      <button id="save_search" className="but_primary">
        Save Search
        <FavoriteBorderIcon
          sx={{ verticalAlign: "middle", marginLeft: "5px" }}
        />
      </button>
    </Div>
  );
};

export default Filter_bar;
