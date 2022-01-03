import React from "react";
import styled from "styled-components";

const Div = styled.div`
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
const ShowResultProject = (props) => {
  console.log(props);
  return (
    <Div>
      <strong className="underline_text jr_f16">Project building</strong>
      {props.data && (
        <>
          {props.data.map((items, key) => (
            <div>
              <a href="#" className="items_keyword jr_color_gray">
                <img
                  src="https://i.ibb.co/2MSKkxQ/building.png"
                  className="jr_icon"
                />
                {items.label}
              </a>
            </div>
          ))}
        </>
      )}
    </Div>
  );
};

export default ShowResultProject;
