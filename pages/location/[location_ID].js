import React from "react";
import { useRouter } from "next/router";

const Location_single_page = () => {
  const router = useRouter();

  return <div>this Location_single_page from : {router.query.location_ID}</div>;
};

export default Location_single_page;
