import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState, useContext } from "react";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import { AuthContext } from "../../../appState/authProviceder";
const Div = styled.div`
  .selectdiv select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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
  const { data_selected, setdata_selected } = useContext(AuthContext);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const onChange = async (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    await setdata_selected({
      ...data_selected,
      [e.target.name]: e.target.value,
    });
    console.log(data_selected);
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
          <SelectSty onChange={onChange} name="min" value={data_selected.min}>
            <option value="">Minimun</option>
            <option value="3">฿ 3M</option>
            <option value="5">฿ 5M</option>
            <option value="8">฿ 8M</option>
            <option value="10">฿ 10M</option>
            <option value="15">฿ 15M</option>
            <option value="20">฿ 20M</option>
            <option value="50">฿ 50M</option>
          </SelectSty>
        </div>
        <RemoveIcon sx={{ color: "#ced4da" }} className="jr_icon" />
        <div className="selectdiv">
          <SelectSty onChange={onChange} name="max" value={data_selected.max}>
            <option selected>Maximum</option>
            <option value="10">฿ 10M</option>
            <option value="15">฿ 15M</option>
            <option value="20">฿ 20M</option>
            <option value="50">฿ 50M</option>
            <option value="80">฿ 80M</option>
            <option value="100">฿ 100M</option>
          </SelectSty>
        </div>
      
      </div>
    </Div>
  );
}
