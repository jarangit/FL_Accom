import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Product_item from "../../components/layout/product/product_item";

const Project_single_page = () => {
  const [DataFecth, setDataFecth] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch(
      `https://www.accomasia.co.th/api/v1/property?txtseach=${router.query.project_ID}`
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
  }, [1]);
  console.log(DataFecth);
  console.log(router.query.location_ID);
  return (
    <div>
      this Location_single_page from : {router.query.project_ID}
      {DataFecth.data ? <Product_item data_list={DataFecth} /> : ""}
    </div>
  );
};

export default Project_single_page;