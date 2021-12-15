import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: white;
  height: 100vh;
  position: relative;
  z-index: 1;
  transition: 0.5s;
`;
const Show_menu_mb = () => {
  const [open_md_menu, setopen_md_menu] = useState(true);
  return (
    <div>
      {open_md_menu === true ? (
          <Div></Div>
      ):(
          ""
      )}
    </div>
  );
};

export default Show_menu_mb;
