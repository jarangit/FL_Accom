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
import { AuthContext } from "../../../appState/authProviceder";

const useStyles = makeStyles({
  fontSize: {
    "& span:last-child": {
      fontSize: 14,
    },
  },
});

const Property_sub_menu = () => {
  const classes = useStyles();
  const { ArrPopertyChecked, setArrPopertyChecked } = useContext(AuthContext);
  const [selected, setselected] = useState(false);
  const [getValueSelected, setgetValueSelected] = useState(["Villa", "House"]);

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
  }, []);
  console.log(isLoaded);
  console.log(dataFetch);

  function onSelect(e, isInputChecked) {
    const found = ArrPopertyChecked.find((items) => {
      return items === e.target.value;
    });
    const update = (e) => {
      console.log("UpdatIng");
      const getIndex = ArrPopertyChecked.indexOf(e.toString())
      console.log(e);
      console.log(getIndex);
      if(getIndex >= 0){
        ArrPopertyChecked.splice(getIndex,1)
        console.log("Deleted")
      }
      console.log(ArrPopertyChecked);
    };
    console.log(found);
    if (!found) {
      ArrPopertyChecked.push(e.target.value);
    } else {
      const delArr = ArrPopertyChecked.filter((items) => {
        return items === e.target.value;
      });
      return update(delArr);
    }
    // setgetValueSelected(e.target.value);
    console.log(isInputChecked);
    console.log(e.target.value);
    console.log(ArrPopertyChecked);

    if (isInputChecked === true) {
      setselected(true);
    } else {
      setselected(false);
    }
  }

  const checkedArr = (e) =>
    ArrPopertyChecked.find((items) => {
      return items === e;
    });

  // console.log(checkedArr("Villa"));

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
                      defaultChecked={
                        checkedArr(items.name.en) !== undefined ? true : false
                      }
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      onChange={onSelect}
                      name={items.name.en}
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
