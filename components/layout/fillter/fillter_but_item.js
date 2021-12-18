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
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";



const Fillter_but_item = () => {
  return (
    <div>
      <Typography variant="h4" className="jr_underline_text">
        Spacail need
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<CircleIcon />}
            />
          }
          label="items"
        />
      </FormGroup>
    </div>
  );
};

export default Fillter_but_item;
