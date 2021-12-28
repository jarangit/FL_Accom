import React from "react";
import styled from "styled-components";
import ProD_items_his from "./proD_items_his";

const Div = styled.div`
margin-bottom:20px;
  .header {
    padding: 10px 0;
    border: 2px solid #65acf0;
    border-style: none none solid none;
    margin-bottom: 10px;
  }
  .items {
    border: 1px solid gray;
    padding: 5px;
    border-radius: 5px;
    margin: 10px 10px 0 0;
  }
  .flex_jr {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Properties_for_sale = () => {
  return (
    <Div>
      <div>
        <p className="header jr_blod">Properties for sale in Bangkok</p>
        <div className="flex_jr">
          <a href="#" className="items">
            items
          </a>
          <a href="#" className="items">
            Penthouse for sale
          </a>
          <a href="#" className="items">
            Office space for sale
          </a>
          <a href="#" className="items">
            Penthouse for sale
          </a>
          <a href="#" className="items">
            Office space for sale
          </a>
          <a href="#" className="items">
            items
          </a>
          <a href="#" className="items">
            Office space for sale
          </a>
        </div>
      </div>
      <div>
        <p className="header jr_blod">Properties for sale in CBD Bangkok</p>
        <div className="flex_jr">
          <a href="#" className="items">
            items
          </a>
          <a href="#" className="items">
            Penthouse for sale
          </a>
          <a href="#" className="items">
            Office space for sale
          </a>
          <a href="#" className="items">
            Penthouse for sale
          </a>
          <a href="#" className="items">
            Office space for sale
          </a>
          <a href="#" className="items">
            items
          </a>
          <a href="#" className="items">
            Office space for sale
          </a>
        </div>
      </div>
      <div>
        <p className="header jr_blod">Hot properties</p>
        <ProD_items_his/>
      </div>
    </Div>
  );
};

export default Properties_for_sale;
