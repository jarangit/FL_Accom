import React, { useState } from "react";
import {
  TextField,
  SearchIconWrapper,
  StyledInputBase,
  Box,
  Button,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Div = styled.div`
  max-height: 320px;
  overflow: scroll;
  overflow-x: hidden; /* Hide vertical scrollbar */

  .text_label {
    :hover {
      color: #65acf0;
    }
  }
  .but_primary {
    padding: 8px 5px;
    border-radius: 3px;
  }
  .but_primary_w {
    border-color: #d8d8d8;
    padding: 8px;
    border-radius: 3px;
  }
`;
const Fillter_but_item = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Div>
      <Typography variant="body1" className="jr_underline_text">
        Spacail need
      </Typography>
      <FormGroup>
        <FormControlLabel
          className="text_label"
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
            />
          }
          label="items"
        />
        <div className="jr_f14 text_label">show more</div>
      </FormGroup>

      <div>
        <Typography variant="body1">
          <strong>Badroom</strong>
        </Typography>
        <button className="but_primary">Any+</button>
        <button className="but_primary_w">1+</button>
      </div>

      <div>
        <Typography variant="body1">
          <strong>Usable Area (Sq.M)</strong>
        </Typography>
        <FormControl fullWidth>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">No min</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography variant="body1">
          <strong>Land Size (Sq.W)</strong>
        </Typography>
        <FormControl fullWidth>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">No min</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Typography variant="body1">
          <strong>Transportation Radius (BTS/MRT)</strong>
        </Typography>
        <FormControl fullWidth>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">No min</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <Typography variant="body1">
          <strong>Tour</strong>
        </Typography>
        <FormGroup>
          <FormControlLabel
            className="text_label"
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
              />
            }
            label="items"
          />
        </FormGroup>
      </div>
    </Div>
  );
};

export default Fillter_but_item;
