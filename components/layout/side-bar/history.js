import React, { useState, useEffect } from "react";
import ProD_items_his from "./proD_items_his";

const History = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataFetch, setdataFetch] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.accomasia.co.th/api/v1/history")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setdataFetch(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [1]);
  // console.log(isLoaded);
  // console.log(dataFetch);
  return (
    <div>
      <p
        style={{ backgroundColor: "rgba(101, 172, 240, 0.2)", padding: "10px" }}
        className="text_color_primary jr_f16 jr_blod"
      >
        My history
      </p>
      {isLoaded ? (
        <ProD_items_his
          data={dataFetch.data}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default History;
