import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../appState/authProviceder";
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
  .button_w.active {
    background-color: #e0eefc;
    color: #002161;
  }
`;
const Beds_sub_menu = () => {
  const { Selected_bads, setSelected_bads } = useContext(AuthContext);
  console.log(Selected_bads);

  function onSelect(e) {
    e.preventDefault();
    setSelected_bads(e.target.value);
  }
  return (
    <div>
      <p className="underline_text">Beds</p>
      <Div>
        <div className="but_primary active">Studio</div>
        <button
          value="1"
          onClick={onSelect}
          className={Selected_bads === "1" ? "button_w active" : "button_w"}
        >
          +1
        </button>
        <button
          value="2"
          onClick={onSelect}
          className={Selected_bads === "2" ? "button_w active" : "button_w"}
        >
          +2
        </button>
        <button
          value="3"
          onClick={onSelect}
          className={Selected_bads === "3" ? "button_w active" : "button_w"}
        >
          +3
        </button>
        <button
          value="4"
          onClick={onSelect}
          className={Selected_bads === "4" ? "button_w active" : "button_w"}
        >
          +4
        </button>
        <button
          value="5"
          onClick={onSelect}
          className={Selected_bads === "5" ? "button_w active" : "button_w"}
        >
          +5
        </button>
      </Div>
    </div>
  );
};

export default Beds_sub_menu;
