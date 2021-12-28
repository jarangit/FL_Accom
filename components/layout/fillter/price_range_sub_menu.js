import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";

const Div = styled.div`
  .selectdiv select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Add some styling */
    background-image: url("https://i.ibb.co/NxhY2hK/arrow-close.png");
    -ms-word-break: normal;
    word-break: normal;
    background-position: calc(100% - 5px) center;
    background-repeat: no-repeat;
    background-size: auto 20px;
    appearance: none;
  }
`;
const SelectSty = styled.select`
  cursor: pointer;
  height: 35px;
  background: white;
  color: gray;
  border-radius: 0.25rem;
  padding: 6px 28px 6px 12px;
  border-color: #ced4da;
  font-size: 14px;
  option {
    color: #002161;
    :hover {
      color: #65acf0;
    }
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 10px;
    margin: 10px;
  }
`;
export default function Price_range_sub_menu() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Div style={{ alignItems: "center" }}>
      <p className="underline_text">Price range</p>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="selectdiv">
          <SelectSty>
            <option selected="">Minimun</option>
            <option value="">No min</option>
            <option value="">฿ 3M</option>
            <option value="">฿ 5M</option>
            <option value="">฿ 8M</option>
            <option value="">฿ 50M</option>
            <option value="">฿ 10M</option>
            <option value="">฿ 15M</option>
            <option value="">฿ 20M</option>
          </SelectSty>
        </div>
        <RemoveIcon sx={{ color: "#ced4da" }} className="jr_icon" />
        <div className="selectdiv">
          <SelectSty>
            <option selected="">Maxnimun</option>
            <option value="">฿ 3M</option>
            <option value="">฿ 5M</option>
            <option value="">฿ 8M</option>
            <option value="">฿ 50M</option>
            <option value="">฿ 10M</option>
            <option value="">฿ 15M</option>
            <option value="">฿ 20M</option>
          </SelectSty>
        </div>
      </div>
    </Div>
  );
}
