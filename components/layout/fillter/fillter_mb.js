import React, { useState, useContext } from "react";
import styled from "styled-components";
import Search_input from "./search_input";
import Fillter_items_md from "./fillter_items_md";
import { AuthContext } from "../../../appState/authProviceder";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";



const Div = styled.div`
  display: none;
  .but_primary_w {
    padding: 10px 5px;
    margin: 0;
  }
  .search_input_md {
    width: 50%;
  }
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
    transition: 0.3s;
  }

  /* Modal Content */
  .modal_content {
    background-color: white;
    margin: auto;
    width: 100%;
    min-height: 100vh;
  }
  .nav_grid {
      padding: 0 10px;
      text-align: center;
      align-items: center;
    }
    
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Fillter_mb = () => {
  const [toggle_fillter, settoggle_fillter] = useState(false);
  const { open_form_filter_mb, setopen_form_filter_mb } =
    useContext(AuthContext);

  return (
    <div>
      <Div display_show={open_form_filter_mb}>
        <div className="modal">
          <div className="modal_content">
            <Grid container className="nav_grid">
              <Grid item xs={2} sx={{ textAlign: "left" }}>
                <FontAwesomeIcon
                  style={{ fontSize: "31" }}
                  icon={faTimes}
                  onClick={() => setopen_form_filter_mb(!open_form_filter_mb)}
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
            <Fillter_items_md />
          </div>
        </div>
        <div>
          <Search_input />
        </div>

        <div className="dropdown_jr" id="fillter_items">
          <button
            name="but_fillter"
            className="but_primary_w"
            onClick={() => setopen_form_filter_mb(!open_form_filter_mb)}
          >
            <img
              src="https://i.ibb.co/bgk0qT9/icon-filter.png"
              width="20"
              className="jr_icon"
            />
          </button>
        </div>
      </Div>
    </div>
  );
};

export default Fillter_mb;
