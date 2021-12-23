import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Div = styled.div`
  .jr_icon_inside_input {
    position: absolute;
    right: 65px;
    top: 0;
    font-size: 25px;
    color: #d8d8d8;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input_search {
    border-radius: 8px;
    border: 1px solid #d8d8d8;
    padding: 11px;
    /* min-width: 250px; */
    margin: 0px;
  }
  .but_search {
    /* font-size: 1.25rem; */
    border: 1px solid #002161;

    border-radius: 8px;
    position: relative;
    left: -10px;
    z-index: 1;
    padding: 11px;
    background-color: #002161;
    color: white;
    width: auto;
    padding-top: -5px;
  }
  .dropdown_search {
    display: block;
    padding: 10px;
    min-width: 280px;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 2;
    /* min-width: 160px; */
    text-align: left;
  }
  

`;
const Search_input = () => {
  const [dataSearch, setdataSearch] = useState("");

  function OnInputSearchChange(e) {
    setdataSearch(e.target.value);
  }

  function ClearDataSearch() {
    setdataSearch("");
  }
  console.log(dataSearch);
  return (
    <Div>
      <form style={{ alignItems: "center", position: "relative" }}>
        {dataSearch != "" ? (
          <CancelOutlinedIcon
            className="jr_icon_inside_input"
            onClick={ClearDataSearch}
          />
        ) : (
          ""
        )}
        <input
          className="input_search"
          type="text"
          autoComplete="off"
          placeholder="Keyword"
          value={dataSearch}
          onChange={OnInputSearchChange}
        />
        <button className="but_search">
          <SearchIcon sx={{ verticalAlign: "middle" }} />
        </button>
      </form>
      {dataSearch != "" ? (
        <div className="dropdown_search">
          <div>
            <Typography
              variant="h3"
              color="primary"
              className="jr_underline_text"
              style={{ paddingBottom: "10px" }}
            >
              <strong>Location</strong>
            </Typography>
            <p style={{ textAlign: "center", margin: "15px" }}>No Resulf</p>
          </div>
          <div>
            <Typography
              variant="h3"
              color="primary"
              className="jr_underline_text"
              style={{ paddingBottom: "10px" }}
            >
              <strong>Transportation</strong>
            </Typography>
            <p style={{ textAlign: "center", margin: "15px" }}>No Resulf</p>
          </div>
          <div>
            <Typography
              variant="h3"
              color="primary"
              className="jr_underline_text"
              style={{ paddingBottom: "10px" }}
            >
              <strong>Location</strong>
            </Typography>
            <p style={{ textAlign: "center", margin: "15px" }}>No Resulf</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </Div>
  );
};

export default Search_input;
Typography;
