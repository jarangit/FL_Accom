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
const Show_result_school = (props) => {
  console.log(props);
  return (
    <Div>
      <strong className="underline_text jr_f16">School</strong>
      {props.data.length !== 0 ? (
        <>
          {props.data.map((items, key) => (
            <div key={key}>
              <a href="#" className="items_keyword jr_color_gray">
                <img
                  src="https://i.ibb.co/HHFDHrR/location.png"
                  className="jr_icon"
                />
                {items.label}
              </a>
            </div>
          ))}
        </>
      ) : (
        <div className="items_keyword jr_color_gray">No Result</div>
      )}
    </Div>
  );
};

export default Show_result_school;
