import React from "react";
import {
  TextField,
  SearchIconWrapper,
  StyledInputBase,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";
import styled from "styled-components";
import CircleIcon from "@mui/icons-material/Circle";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

const Div = styled.div`
  .jr_icon {
    opacity: 0;
    transition: 0.5s;
    margin-right: 2px;
  }
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input_search {
    border-radius: 8px;
    border: 2px solid #d8d8d8;
    padding: 11px;
  }
  .but_search {
    /* font-size: 1.25rem; */
    border-radius: 8px;
    position: relative;
    left: -10px;
    z-index: 1;
    padding: 11px;
    background-color: #002161;
    color: white;
  }
  a {
    padding: 11px;
  }
  a:hover {
    .jr_icon {
      opacity: 1;
    }
    background-color: red;
    padding: 11px;
    border-radius: 8px;
    background-color: rgba(101, 172, 240, 0.2);
    transition: 0.5s;
  }
`;
const Filter_bar = () => {
  return (
    <Div>
      <div>
        <input
          className="input_search"
          type="text"
          autocomplete="off"
          placeholder="Keyword"
        />
        <button className="but_search">
          <SearchIcon sx={{ verticalAlign: "middle" }} />
        </button>
      </div>
      <div>
        <a href="/">
          <CircleIcon
            className="jr_icon"
            sx={{ fontSize: "10px", color: "#65acf0" }}
          />
          Rent
        </a>
      </div>
      <div>
        <CircleIcon
          className="jr_icon"
          sx={{ fontSize: "10px", color: "#65acf0" }}
        />
        <a href="/">
          {" "}
          <CircleIcon
            className="jr_icon"
            sx={{ fontSize: "10px", color: "#65acf0" }}
          />
          Property Type
        </a>
      </div>
      <div>
        <a href="/">
          {" "}
          <CircleIcon
            className="jr_icon"
            sx={{ fontSize: "10px", color: "#65acf0" }}
          />
          Price range
        </a>
      </div>
      <div>
        <a href="/">
          {" "}
          <CircleIcon
            className="jr_icon"
            sx={{ fontSize: "10px", color: "#65acf0" }}
          />
          Bads
        </a>
      </div>
      <button className="but_primary_w">
        Filters
        <SyncAltIcon
          sx={{ verticalAlign: "middle", marginLeft: "5px" }}
          color="primary"
        />
      </button>
      <button
        className="but_primary"
      >
        Save Search
      </button>
    </Div>
  );
};

export default Filter_bar;
