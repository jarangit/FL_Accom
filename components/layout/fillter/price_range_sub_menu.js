import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import styled from "styled-components";

const SelectSty = styled.select`
  height: 35px;
  background: white;
  color: gray;
  border-radius: 0.25rem;
  padding: 6px 12px;
  border-color: #ced4da;
  font-size: 14px;

  option {
    color: black;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export default function Price_range_sub_menu() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ alignItems: "center" }}>
      <Typography variant="h4" className="jr_underline_text">
        Price range
      </Typography>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="custom-select">
          <SelectSty>
            <option selected="">Minimun</option>
            <option value="">฿ 3M</option>
            <option value="">฿ 5M</option>
            <option value="">฿ 8M</option>
            <option value="">฿ 50M</option>
            <option value="">฿ 10M</option>
            <option value="">฿ 15M</option>
            <option value="">฿ 20M</option>
          </SelectSty>
        </div>
        <div>-</div>
        <div className="custom-select">
          <SelectSty>
            <option selected="">Minimun</option>
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
    </div>
  );
}
