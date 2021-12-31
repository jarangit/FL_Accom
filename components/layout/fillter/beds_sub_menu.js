import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  .button_w {
    border-radius: 0px 3px 3px 0px;
    width: 100%;
    border: 1px solid #d8d8d8;
    margin: 10px 0;
    background: white;
  }
  .button_w:focus {
    background-color: #e0eefc;
    color: #002161;
  }
`;
const Beds_sub_menu = () => {
  return (
    <div>
        <p className="underline_text">Beds</p>
      <Div>
        <button className="but_primary">Studio</button>
        <button className="button_w">+1</button>
        <button className="button_w">+2</button>
        <button className="button_w">+3</button>
        <button className="button_w">+4</button>
        <button className="button_w">+5</button>
      </Div>
    </div>
  );
};

export default Beds_sub_menu;
