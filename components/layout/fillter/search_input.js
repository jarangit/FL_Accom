import React, { useState, useContext, useEffect } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { AuthContext } from "../../../appState/authProviceder";
import ShowResultProject from "./search/show_result_project";
import Show_result_location from "./search/show_result_location";
import Show_result_Train from "./search/show_result_train";
import Show_result_school from "./search/show_result_school";
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
    cursor: pointer;
  }

  .input_search {
    border-radius: 8px;
    border: 1px solid #d8d8d8;
    padding: 11px;
    min-width: 250px;
    margin: 0px;
    width: 70%;
  }
  .but_search {
    border-radius: 8px;
    position: relative;
    left: -10px;
    padding: 11px;
    background-color: #002161;
    color: white;
    width: auto;
    padding-top: -5px;
    :hover {
      background-color: #4b72c0;
    }
  }
  .dropdown_search {
    z-index: 5;

    height: 500px;
    overflow: scroll;
    display: block;
    padding: 10px;
    width: 280px;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 2;
    /* min-width: 160px; */
    text-align: left;
  }

  .items_keyword {
    font-size: 14px;
    display: block;
    margin: 15px 0;
    :hover {
      color: #65acf0;
      span {
        color: #65acf0;
      }
    }
  }
`;

const Search_input = () => {
  const { Gobal_search_filter_api } = useContext(AuthContext);
  const [dataSearch, setdataSearch] = useState("");
  const [after_filter, setafter_filter] = useState();
  const [DataFecth, setDataFecth] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.accomasia.co.th/api/v1/search_advanced?search_txt=${dataSearch}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setDataFecth(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [dataSearch]);

  // console.log(DataFecth.data.list);

  function OnInputSearchChange(e) {
    setdataSearch(e.target.value);
  }

  function ClearDataSearch() {
    setdataSearch("");
  }

  const ShowResult = (props) => {
    let MainElemrnt = [];
    if (!DataFecth.data) {
      return <div>No result</div>;
    }
    console.log(DataFecth);

    if (DataFecth.data.list[0].mode !== null) {
      const resultLocation = DataFecth.data.list.filter((e) =>
        e.mode.includes("street")
      );
      const resultProject = DataFecth.data.list.filter((e) =>
        e.mode.includes("project")
      );
      const resultTrain = DataFecth.data.list.filter((e) =>
        e.mode.includes("Train")
      );
      const resultSchool = DataFecth.data.list.filter((e) =>
        e.mode.includes("school")
      );
      return (
        <>
          <Show_result_location data={resultLocation} />
          <ShowResultProject data={resultProject} />
          <Show_result_Train data={resultTrain} />
          <Show_result_school data={resultSchool} />
        </>
      );
    }
    return "";
  };
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
      {dataSearch !== "" ? (
        <div className="dropdown_search">
          <ShowResult data={DataFecth} />
        </div>
      ) : (
        ""
      )}
    </Div>
  );
};

export default Search_input;
