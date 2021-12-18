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

const Div = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;

  .jr_icon {
    opacity: 0;
    transition: 0.5s;
    margin-right: 2px;
  }
  .input_search {
    border-radius: 8px;
    border: 2px solid #d8d8d8;
    padding: 11px;
  }
  .but_search {
    /* font-size: 1.25rem; */
    border-radius: 8px;
    position: relative;
    left: -10px;
    z-index: 1;
    padding: 11px;
    background-color: #002161;
    color: white;
    width: auto;
  }
  .but_menu {
    padding: 11px;
    background-color: white;
  }
  .but_menu:hover {
    .jr_icon {
      opacity: 1;
    }

    background-color: red;
    padding: 11px;
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

const Dropdown_jr = styled.div`
  display: ${(props) => props.toggled};
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
    for (let i = 0; i < menu_api.length; i++) {
      const element = menu_api[i];
      // console.log(element.name)
    }
    setgetName_main_menu(e.target.name);
    settoggle(!toggle);
  };
  // console.log(getName_main_menu);

  const ShowDropDown = (props) => {
    if (props.dataSub.name === "Price range") {
      return <div>Function price</div>;
    } else if (props.dataSub.name === "Bads") {
      return <div>Function price</div>;
    } else{
      return(
        <div>Drop down</div>
      )
    }
  };
  return (
    <Div className="jr_mb_close">
      <div style={{ alignItems: "center" }}>
        <input
          className="input_search"
          type="text"
          autoComplete="off"
          placeholder="Keyword"
        />
        <button className="but_search">
          <SearchIcon sx={{ verticalAlign: "middle" }} />
        </button>
      </div>
      {menu_api.map((items, key) => (
        <div className="dropdown_jr" key={key}>
          <button
            name={items.name}
            className="but_menu"
            onClick={onOpen_dropdown}
          >
            <CircleIcon
              className="jr_icon"
              sx={{
                fontSize: "10px",
                color: "#65acf0",
                verticalAlign: "middle",
              }}
            />
            {items.name}
          </button>
          {items.name === getName_main_menu ? (
            <ShowDropDown dataSub={items} />
          ) : (
            ""
          )}

          {/* // <div className="dropdown-content">
            //   <Typography variant="h4">Bangkok, Thailand</Typography>
            //   <FormGroup>
            //     {items.sub_menu && (
            //       <div>
            //         {items.sub_menu.map((sub_items, key) => (
            //           <FormControlLabel
            //             key={key}
            //             control={
            //               <Checkbox
            //                 icon={<CircleOutlinedIcon />}
            //                 checkedIcon={<CircleIcon />}
            //               />
            //             }
            //             label={sub_items}
            //           />
            //         ))}
            //       </div>
            //     )}
            //   </FormGroup>
            // </div> */}
        </div>
      ))}

      <button id="fillter" className="but_primary_w">
        <span className="hid_mb">Filters</span>
        <SyncAltIcon
          sx={{ verticalAlign: "middle", marginLeft: "5px" }}
          color="primary"
        />
      </button>
      <button
        id="save_search"
        className="but_primary"
        style={{ minWidth: "140px" }}
      >
        Save Search
        <FavoriteBorderIcon
          sx={{ verticalAlign: "middle", marginLeft: "5px" }}
        />
      </button>
    </Div>
  );
};

export default Filter_bar;
