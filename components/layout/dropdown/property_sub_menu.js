import React, { useState, useContext, useEffect } from "react";
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
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  fontSize: {
    "& span:last-child": {
      fontSize: 14,
    },
  },
});

const Property_sub_menu = () => {
  const classes = useStyles();

  const [selected, setselected] = useState(false);
  const [getValueSelected, setgetValueSelected] = useState("Villa");

  const [age, setAge] = React.useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataFetch, setdataFetch] = useState([]);

  useEffect(() => {
    fetch("https://www.accomasia.co.th/api/v1/masterdata")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setdataFetch(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [getValueSelected]);
  console.log(isLoaded);
  console.log(dataFetch);

  function onSelect(e, isInputChecked) {
    getValueSelected.push(e.target.value);
    // setgetValueSelected(e.target.value);
    console.log(isInputChecked);
    console.log(e.target.value);
    console.log(getValueSelected);

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
        {/* <p className="underline_text jr_f16">{props.headText}</p> */}
        <FormGroup>
          {dataFetch.length !== 0 ? (
            <>
              {dataFetch.data.property_types.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className={`jr_f14 jr_hover_blue ${classes.fontSize}`}
                  control={
                    <Checkbox
                      checked={
                        items.name.en === getValueSelected ? true : false
                      }
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      onChange={onSelect}
                    />
                  }
                  color="primary"
                  label={items.name.en}
                  value={items.name.en}
                />
              ))}
            </>
          ) : (
            ""
          )}
        </FormGroup>
      </div>
    </div>
  );
};

export default Property_sub_menu;
