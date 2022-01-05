import React, { useState, useContext } from "react";
import styled from "styled-components";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Price_range_sub_menu from "./price_range_sub_menu";
import Beds_sub_menu from "./beds_sub_menu";
import Fillter_but_item from "./fillter_but_item";
import Search_input from "./search_input";
import Property_sub_menu from "../dropdown/property_sub_menu";
import Rent_dropdowm_pc from "../dropdown/rent_dropdowm_pc";
import { AuthContext } from "../../../appState/authProviceder";

const Desk_fillter = styled.div`
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
    position: relative;

    padding: 10px 20px;
    background-color: white;
  }
  .but_menu.active {
    background-color: rgba(101, 172, 240, 0.2);
    border-radius: 8px;
    background-color: rgba(101, 172, 240, 0.2);
    transition: 0.5s;
    .jr_icon_dot {
      opacity: 1;
    }
  }
  .dot_icon_pop {
    position: absolute;
    transition: 0.3s;
    left: 5px;
    display: inline-block;
  }
  .dot_icon_pop::before {
    display: inline;
    position: absolute;
    background-color: #9bdeff;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    left: 3px;
    top: 5px;
    z-index: 1;
    content: "";
  }
  .dot_icon {
    position: absolute;
    transition: 0.3s;
    left: 5px;
    display: inline-block;
  }
  .dot_icon::before {
    display: none;
    position: absolute;
    background-color: #9bdeff;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    left: 3px;
    top: 5px;
    z-index: 1;
    content: "";
  }
  .but_menu.active .dot_icon::before {
    display: inline;
  }

  .but_menu:hover.dropdown-content {
    display: none;
  }
  .arrow_icon {
    position: absolute;
    transition: 0.3s;
    right: 0px;
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
  .but_menu.active .arrow_icon::before {
    background-image: url("https://i.ibb.co/CK4mbLR/arrow-open.png");
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

const Div = styled.div`
  @media (max-width: 1024px) {
    .jr_mb_close {
      display: none;
    }
    .jr_mb_open {
      display: none;
    }
  }
`;

const Filter_bar = () => {
  const [toggle, settoggle] = useState(false);
  const [getName_main_menu, setgetName_main_menu] = useState("");
  const { data_selected, data_check_rent, Selected_bads, ArrPopertyChecked } =
    useContext(AuthContext);

  console.log(ArrPopertyChecked.length);
  const menu_api = [
    {
      name: "Rent",
      head: "Select Your Purpose",
      sub_menu: ["Rent", "Sale"],
    },
    {
      name: "Property type",
      head: "Property Type",
      sub_menu: ["Condominium", "Apartment", "House"],
    },
    {
      name: "Price range",
      head: "",
      sub_menu: "",
    },
    {
      name: "Beds",
      head: "",
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

  const ShowDropDown = (props) => {
    if (props.dataSub.name === "Price range") {
      return (
        <div className="dropdown-content">
          <Price_range_sub_menu />
        </div>
      );
    } else if (props.dataSub.name === "Beds") {
      return (
        <div className="dropdown-content">
          <Beds_sub_menu />
        </div>
      );
    } else if (props.dataSub === "but_fillter") {
      return (
        <div className="dropdown-content" style={{ padding: "0" }}>
          <Fillter_but_item />
        </div>
      );
    } else if (props.dataSub.name === "Property type") {
      return (
        <div>
          <Property_sub_menu />
        </div>
      );
    } else {
      return <Rent_dropdowm_pc dataRadio={props} />;
    }
  };

  const ShowMain_menu = (props) => {
    if (props.dataItems === "Price range" && data_selected.min !== "") {
      return `฿${data_selected.min} - ฿${data_selected.max}`;
    } else if (props.dataItems === "Rent") {
      return <>{data_check_rent}</>;
    } else if (props.dataItems === "Beds") {
      return `${Selected_bads} Beds`;
    } else if (props.dataItems === "Property type") {
      return (
        <>
          {ArrPopertyChecked.length !== 0 ? (
            <>
              <span className="dot_icon_pop"></span>
              Property type
            </>
          ) : (
            "Property type"
          )}
        </>
      );
    } else {
      return <>{props.dataItems}</>;
    }
  };
  return (
    <Div>
      <Desk_fillter className="jr_mb_close" toggle={toggle}>
        <div>
          <Search_input />
        </div>
        {menu_api.map((items, key) => (
          <div className="dropdown_jr" key={key}>
            <button
              name={items.name}
              className={
                items.name === getName_main_menu && toggle
                  ? "but_menu active"
                  : "but_menu"
              }
              onClick={onOpen_dropdown}
            >
              <span className="dot_icon"></span>
              <ShowMain_menu dataItems={items.name} />
              <span className="arrow_icon"></span>
            </button>
            {toggle && (
              <div>
                {items.name === getName_main_menu ? (
                  <ShowDropDown dataSub={items} headText={items.head} />
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        ))}

        <div className="dropdown_jr" id="fillter_items">
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
      </Desk_fillter>
    </Div>
  );
};

export default Filter_bar;
