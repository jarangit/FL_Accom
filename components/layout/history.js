import React from "react";
import ProD_items_his from "./proD_items_his";

const History = () => {
  return (
    <div>
      <h3
        style={{ backgroundColor: "rgba(101, 172, 240, 0.2)", padding: "10px" }}
        className="text_color_primary"
      >
        History
      </h3>

      <ProD_items_his/>
    </div>
  );
};

export default History;
