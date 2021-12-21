import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FakeData_filter_menu_md } from "../../fakeData/filter_menu_md";
import { FormControl, FormGroup, FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import From_checkBox_md from "./from_checkBox_md";
import { AuthContext } from "../../../appState/authProviceder";

const Div = styled.div`
  position: fixed;
  background-color: white;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  overflow: hidden;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  ul {
    padding: 0;
  }
  .main_ul {
    li {
      margin: 20px 0;
    }
  }
  .jr_icon {
    position: absolute;
    right: 0;
  }
`;
const Fillter_items_md = () => {
  const { openFilter_mb, setopenFilter_mb } = useContext(AuthContext);
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
    return <div> {props} </div>;
  };
  return (
    <Div>
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
                className="jr_icon"
                src="https://i.ibb.co/NxhY2hK/arrow-close.png"
                width="20px"
              />
              {openFilter_mb && (
                <>
                  {items.name === get_name_sub ? (
                    <From_checkBox_md dataSub={items.options_menu} />
                  ) : (
                    ""
                  )}
                </>
              )}
              {/* {openFilter_mb === true ? (
                <From_checkBox_md dataSub={items.options_menu} />
              ) : (
                ""
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </Div>
  );
};

export default Fillter_items_md;
