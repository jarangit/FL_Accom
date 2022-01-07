import React, { useState, useEffect, useContext } from "react";
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";
import Beds_option_mb from "./MB/beds_option_mb";
import { AuthContext } from "../../../appState/authProviceder";
const useStyles = makeStyles({
  fontSize: {
    "& span:last-child": {
      fontSize: 14,
    },
  },
});

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
    height: 200px;
    /* height: ${(props) => (props.show === true ? "auto" : "200px")}; */
    overflow: hidden;
    label {
      width: 100%;
    }
  }

  .form_group.active {
    height: auto;
  }
  .add_mlr {
    margin: 0 10px;
  }
  .but_show {
    position: relative;
  }
  .but_show::before {
    position: relative;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f078";
    margin-right: 10px;
    padding: 0;
  }
  .but_show.active_arrow ::before {
    content: "\f077";
  }
  .selectdiv select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Add some styling */
    background-image: url("https://i.ibb.co/NxhY2hK/arrow-close.png");
    -ms-word-break: normal;
    word-break: normal;
    background-position: calc(100% - 5px) center;
    background-repeat: no-repeat;
    background-size: auto 20px;
    appearance: none;
  }
`;
const Fillter_but_item = () => {
  const classes = useStyles();
  const { gobal_filter_menu_api, setgobal_filter_menu_api } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataFetch, setdataFetch] = useState([]);
  const [ShowMore, setShowMore] = useState(false);
  const [getButName, setgetButName] = useState();
  console.log(gobal_filter_menu_api );
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
  }, [getButName]);
  console.log(isLoaded);
  console.log(dataFetch);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const check_show_all = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    try {
      console.log("Doing");
      console.log(getButName);
      if (e.target.name !== getButName) {
        setShowMore(true);
        console.log(getButName);
        console.log("ChecK-name");
      } else {
        setShowMore(!ShowMore);
      }
    } catch (error) {
      console.lov(error);
    }
    setgetButName(e.target.name);
    console.log("Complete");
  };
  return (
    <Div show={ShowMore}>
      <div className="add_mlr">
        <p>Special need</p>
        <FormGroup
          className={
            getButName === "Specail" && ShowMore
              ? "form_group active "
              : "form_group "
          }
        >
          {dataFetch.length !== 0 ? (
            <>
              {gobal_filter_menu_api.data.special_charecter.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className={`text_label ${classes.fontSize}`}
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
          type="button"
          name="Specail"
          className={
            getButName === "Specail" && ShowMore
              ? "jr_f14 text_label jr_color_blue but_show active_arrow"
              : "jr_f14 text_label jr_color_blue but_show "
          }
          onClick={check_show_all}
        >
          {getButName === "Specail" && ShowMore ? "Hide" : "Show all"}
        </button>
        <hr />
      </div>
      <div className="add_mlr">
        <p>Amenties</p>
        <FormGroup
          className={
            getButName === "Amenties" && ShowMore
              ? "form_group active "
              : "form_group "
          }
        >
          {dataFetch.length !== 0 ? (
            <>
              {dataFetch.data.amenities.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className={`text_label ${classes.fontSize}`}
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
          className={
            getButName === "Amenties" && ShowMore
              ? "jr_f14 text_label jr_color_blue but_show active_arrow"
              : "jr_f14 text_label jr_color_blue but_show "
          }
          onClick={check_show_all}
        >
          {getButName === "Amenties" && ShowMore ? "Hide" : "Show all"}
        </button>
        <hr />
      </div>
      <div className="add_mlr">
        <p>Facilities</p>
        <FormGroup
          className={
            getButName === "Facilities" && ShowMore
              ? "form_group active "
              : "form_group "
          }
        >
          {dataFetch.length !== 0 ? (
            <>
              {dataFetch.data.facilities.map((items, key) => (
                <FormControlLabel
                  key={key}
                  className={`text_label ${classes.fontSize}`}
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
          className={
            getButName === "Facilities" && ShowMore
              ? "jr_f14 text_label jr_color_blue but_show active_arrow"
              : "jr_f14 text_label jr_color_blue but_show "
          }
          onClick={check_show_all}
        >
          {getButName === "Facilities" && ShowMore ? "Hide" : "Show all"}
        </button>
        <hr />
      </div>

      <div className="add_mlr">
        <p>Bathrooms</p>
        <Beds_option_mb />
      </div>

      <div className="add_mlr">
        <p>Usable Area (Sq.M)</p>
        <div className="selectdiv">
          <select className="jr_select jr_fullWidth">
            <option className="jr_option" selected="">
              No min
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
        <div className="selectdiv">
          <select className="jr_select jr_fullWidth">
            <option className="jr_option" selected="">
              No min
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
        <div className="selectdiv">
          <select className="jr_select jr_fullWidth">
            <option className="jr_option" selected="">
              No max
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
