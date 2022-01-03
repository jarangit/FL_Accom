import React, { useState, useContext } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { AuthContext } from "../../../appState/authProviceder";
import ShowResultProject from "./search/show_result_project";
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
    min-width: 280px;
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
  //Find from seach input
  const find_list = Gobal_search_filter_api.filter((item) => {
    let label = item.label.toLowerCase();
    return label.includes(dataSearch);
  });

  function OnInputSearchChange(e) {
    setdataSearch(e.target.value);
  }

  function ClearDataSearch() {
    setdataSearch("");
  }
  console.log(find_list);

  const ShowResult = (props) => {
    for (let i = 0; i < find_list.length; i++) {
      const Items = find_list[i];
      if (Items.mode === "project") {
        const resultProject = find_list.filter((e) => {
          return e.mode.includes("project");
        });
        return <ShowResultProject data={resultProject} />;
      }
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
      {dataSearch !== '' ? (
        <div className="dropdown_search">
          <ShowResult data={find_list} />
        </div>
      ) : (
        ""
      )}
      {/* {dataSearch != "" ? (
        <div className="dropdown_search">
          <div>
            <strong className="underline_text jr_f16">Location</strong>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HHFDHrR/location.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HHFDHrR/location.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HHFDHrR/location.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HHFDHrR/location.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
          </div>

          <div>
            <strong className="underline_text jr_f16">Transportation</strong>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/xMzRyCL/transportation.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/xMzRyCL/transportation.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/xMzRyCL/transportation.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/xMzRyCL/transportation.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
          </div>

          <div>
            <strong className="underline_text jr_f16">Project building</strong>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/2MSKkxQ/building.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/2MSKkxQ/building.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/2MSKkxQ/building.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/2MSKkxQ/building.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
          </div>

          <div>
            <strong className="underline_text jr_f16">School</strong>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HD4nZTK/school.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HD4nZTK/school.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HD4nZTK/school.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
            <a href="#" className="items_keyword jr_color_gray">
              <img
                src="https://i.ibb.co/HD4nZTK/school.png"
                className="jr_icon"
              />
              <span className="jr_color_primary">Keyword </span>
              no-keyword
            </a>
          </div>
        </div>
      ) : (
        ""
      )} */}
    </Div>
  );
};

export default Search_input;
