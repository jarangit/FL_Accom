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
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";

const Rent_dropdowm_pc = (props) => {
  const [selected, setselected] = useState(false);
  const [getValueSelected, setgetValueSelected] = useState("");
  function onSelect(e) {
    setgetValueSelected(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="dropdown-content">
      <p className="underline_text jr_f16">{props.dataRadio.headText}</p>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="radio-buttons-group">
          {props.dataRadio.dataSub && (
            <>
              {props.dataRadio.dataSub.sub_menu.map((sub_items, key) => (
                <FormControlLabel
                  className="jr_hover_blue"
                  key={key}
                  value={sub_items}
                  control={<Radio name={sub_items} />}
                  label={sub_items}
                  name={sub_items}
                  onChange={onSelect}
                  sx={{
                    color:
                      sub_items === getValueSelected ? "#002161" : "#6e6d6d",
                  }}
                />
              ))}
            </>
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Rent_dropdowm_pc;
