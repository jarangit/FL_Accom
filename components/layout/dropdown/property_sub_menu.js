import React, { useState, useContext } from "react";
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
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Property_sub_menu = (props) => {
  const [selected, setselected] = useState(false);
  const [getValueSelected, setgetValueSelected] = useState("");
  function onSelect(e, isInputChecked) {
    setgetValueSelected(e.target.value);
    console.log(isInputChecked);
    console.log(e.target.value);

    if (isInputChecked === true) {
      setselected(true);
    } else {
      setselected(false);
    }
    // console.log(selected);
  }

  return (
    <div>
      <div className="dropdown-content ">
        <p className="underline_text jr_f16">{props.headText}</p>
        <FormGroup>
          {props.dataCheckBox.sub_menu.map((items, key) => (
            <FormControlLabel
              key={key}
              className="jr_f14 jr_hover_blue"
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon />}
                  checkedIcon={<CheckBoxIcon />}
                  onChange={onSelect}
                />
              }
              color="primary"
              label={items}
              value={items}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

export default Property_sub_menu;
