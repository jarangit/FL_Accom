import React, { useState, useContext } from "react";
import styled from "styled-components";
import Search_input from "./search_input";
import Fillter_items_md from "./fillter_items_md";
import { AuthContext } from "../../../appState/authProviceder";

const Div = styled.div`
  display: none;
  .but_primary_w {
    padding: 10px 5px;
    margin: 0;
  }
  .search_input_md {
    width: 50%;
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
      {open_form_filter_mb === true ? <Fillter_items_md /> : ""}

      <Div>
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
