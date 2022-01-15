import React from "react";
import styled from "styled-components";
import Link from "next/link";

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
      {props.data.length !== 0 ? (
        <>
          {props.data.map((items, key) => (
            <div key={key}>
              <Link
                href="/project/[project_ID]"
                as={`/project/${items.label.toLowerCase()}`}
              >
                <a className="items_keyword jr_color_gray">
                  <img
                    src="https://i.ibb.co/2MSKkxQ/building.png"
                    className="jr_icon"
                  />
                  {items.label}
                </a>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <div className="items_keyword jr_color_gray">No Result</div>
      )}
    </Div>
  );
};

export default ShowResultProject;
