import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../appState/authProviceder";
const Div = styled.div`
  .checkBox_icon {
    position: absolute;
    left: 0;
  }
  .items{
    margin: 10px 0;
  }
`;
const From_checkBox_md = (props) => {
  const { openFilter_mb, setopenFilter_mb } = useContext(AuthContext);
  return (
    <Div>
      {props.dataSub && (
        <>
          {props.dataSub.map((items, key) => (
            <div  className="items" key={key}>
              <input type="checkbox" className="checkBox_icon" />
              <span>{items}</span>
            </div>
          ))}
        </>
      )}
    </Div>
  );
};

export default From_checkBox_md;
