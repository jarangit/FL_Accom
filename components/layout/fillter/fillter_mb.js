import React from "react";
import styled from "styled-components";
import Search_input from "./search_input";

const Div = styled.div`
display: flex;
.but_primary_w{
    padding: 10px 5px ;
    margin: 0;
}
.search_input_md{
    width: 50%;
}
`;
const Fillter_mb = () => {
  return (
    <Div>
      <div>
        <Search_input/>
      </div>

      <div className="dropdown_jr" id="fillter_items">
        <button name="but_fillter" className="but_primary_w">
          <img
            src="https://i.ibb.co/bgk0qT9/icon-filter.png"
            width="20"
            className="jr_icon"
          />
        </button>
      </div>
    </Div>
  );
};

export default Fillter_mb;
