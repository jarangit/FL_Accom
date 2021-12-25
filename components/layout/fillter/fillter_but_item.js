import React, { useState, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Div = styled.div`
  max-height: 320px;
  overflow: scroll;
  overflow-x: hidden; /* Hide vertical scrollbar */
  color: #464646;
  font-size: 14px;
  .text_label {
    background-color: white;
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
    margin-left: -3px;
  }
  .but_primary_w:focus {
    background-color: #e0eefc;
  }
  .form_group {
    /* display:block; */
    height: ${(props) => (props.show === true ? "auto" : "200px")};
    overflow: hidden;
    label {
      width: 100%;
    }
  }
  .add_mlr {
    margin: 0 10px;
  }
`;
const Fillter_but_item = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataFetch, setdataFetch] = useState([]);
  const [ShowMore, setShowMore] = useState(false);
  const [getButName, setgetButName] = useState();
  console.log(ShowMore);
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function check_show_all(e) {
    setgetButName(e.target.name);
    if (e.target.name === getButName) {
      setShowMore(true);
    } else if (getButName === getButName) {
      setShowMore(false);
    }
  }
  const ShowAllDropDown = () => {};
  ShowAllDropDown();
  return (
    <Div show={ShowMore}>
      <div className="add_mlr">
        <p>Spacail need</p>
        <FormGroup className="form_group">
          {dataFetch.length !== 0 ? (
            <>
              {dataFetch.data.special_charecter.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className="text_label"
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                    />
                  }
                  label={items.name.en}
                />
              ))}
            </>
          ) : (
            ""
          )}
        </FormGroup>
        <button
          name="Spacail"
          className="jr_f14 text_label jr_color_blue"
          onClick={check_show_all}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ marginRight: "12px" }}
          />
          {ShowMore ? "Hide" : "Show all"}
        </button>
        <hr />
      </div>
      <div className="add_mlr">
        <p>Amenties</p>
        <FormGroup className="form_group">
          {dataFetch.length !== 0 ? (
            <>
              {dataFetch.data.amenities.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className="text_label"
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                    />
                  }
                  label={items.name.en}
                />
              ))}
            </>
          ) : (
            ""
          )}
        </FormGroup>
        <button
          name="Amenties"
          className="jr_f14 text_label jr_color_blue"
          onClick={check_show_all}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ marginRight: "12px" }}
          />
          {ShowMore ? "Hide" : "Show all"}
        </button>
        <hr />
      </div>
      <div className="add_mlr">
        <p>Facilities</p>
        <FormGroup className="form_group">
          {dataFetch.length !== 0 ? (
            <>
              {dataFetch.data.facilities.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className="text_label"
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                    />
                  }
                  label={items.name.en}
                />
              ))}
            </>
          ) : (
            ""
          )}
        </FormGroup>
        <button
          name="Facilities"
          className="jr_f14 text_label jr_color_blue"
          onClick={check_show_all}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ marginRight: "12px" }}
            onClick={check_show_all}
          />
          {ShowMore ? "Hide" : "Show all"}
        </button>
        <hr />
      </div>

      <div className="add_mlr">
        <p>Badroom</p>
        <button className="but_primary">Any+</button>
        <button className="but_primary_w">1+</button>
        <button className="but_primary_w">2+</button>
        <button className="but_primary_w">3+</button>
        <button className="but_primary_w">4+</button>
        <button className="but_primary_w">5+</button>
      </div>

      <div className="add_mlr">
        <p>Usable Area (Sq.M)</p>
        <div>
          <select className="jr_select jr_fullWidth">
            <option className="jr_option" selected="">
              Minimun
            </option>
            <option value="">฿ 3M</option>
            <option value="">฿ 5M</option>
            <option value="">฿ 8M</option>
            <option value="">฿ 50M</option>
            <option value="">฿ 10M</option>
            <option value="">฿ 15M</option>
            <option value="">฿ 20M</option>
          </select>
        </div>
      </div>
      <div className="add_mlr">
        <p>Land Size (Sq.W)</p>
        <div>
          <select className="jr_select jr_fullWidth">
            <option className="jr_option" selected="">
              Minimun
            </option>
            <option value="">฿ 3M</option>
            <option value="">฿ 5M</option>
            <option value="">฿ 8M</option>
            <option value="">฿ 50M</option>
            <option value="">฿ 10M</option>
            <option value="">฿ 15M</option>
            <option value="">฿ 20M</option>
          </select>
        </div>
      </div>
      <div className="add_mlr">
        <p>Transportation Radius (BTS/MRT)</p>
        <div>
          <select className="jr_select jr_fullWidth">
            <option className="jr_option" selected="">
              Minimun
            </option>
            <option value="">฿ 3M</option>
            <option value="">฿ 5M</option>
            <option value="">฿ 8M</option>
            <option value="">฿ 50M</option>
            <option value="">฿ 10M</option>
            <option value="">฿ 15M</option>
            <option value="">฿ 20M</option>
          </select>
        </div>
      </div>

      <div className="add_mlr">
        <p>Tour</p>
        <FormGroup>
          <FormControlLabel
            className="text_label"
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
              />
            }
            label="3D tour"
          />
          <FormControlLabel
            className="text_label"
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
              />
            }
            label="Live tour"
          />
          <FormControlLabel
            className="text_label"
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
              />
            }
            label="Open house"
          />
        </FormGroup>
      </div>
    </Div>
  );
};

export default Fillter_but_item;
