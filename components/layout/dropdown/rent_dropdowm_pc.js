import React, { useState, useContext } from "react";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { makeStyles } from "@mui/styles";
import { AuthContext } from "../../../appState/authProviceder";


const useStyles = makeStyles({
  fontSize: {
    "& span:last-child": {
      fontSize: 14,
    },
  },
});

const Rent_dropdowm_pc = (props) => {
  const classes = useStyles();

  const { data_check_rent, setdata_check_rent,} = useContext(AuthContext);


  const [selected, setselected] = useState(false);
  const [getValueSelected, setgetValueSelected] = useState("");

  function onSelect(e) {
    setgetValueSelected(e.target.value);
    setdata_check_rent(e.target.value)
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
                  className={`jr_hover_blue ${classes.fontSize}`}
                  key={key}
                  value={sub_items}
                  control={<Radio name={sub_items} sx={{ fontSize: "19px" }} />}
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
