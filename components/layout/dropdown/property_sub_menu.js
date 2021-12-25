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

const Property_sub_menu = () => {
  const [selected, setselected] = useState(false);
  const [getValueSelected, setgetValueSelected] = useState("");

  const [age, setAge] = React.useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataFetch, setdataFetch] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.accomasia.co.th/api/v1/masterdata")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setdataFetch(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(isLoaded);
  console.log(dataFetch);

if(dataFetch.length !== 0){
  console.log("ready")
}




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
        {/* <p className="underline_text jr_f16">{props.headText}</p> */}
        <FormGroup>
          {dataFetch.length !== 0 ?(
            <>
              {dataFetch.data.property_types.map((items, key) => (
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
                  label={items.name.en}
                  value={items.name.en}
                />
              ))}
            </>
          ):''}
        </FormGroup>
      </div>
    </div>
  );
};

export default Property_sub_menu;
