import { Stack, Switch } from "@mui/material";
import CustomSeparator from "../components/layout/items/bread";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Product_item from "../components/layout/product/product_item";
import Nav_contact from "../components/layout/nav/nav_contact";
import Accordion_items from "../components/layout/items/accordion";
import Pagination_jr from "../components/layout/items/pagination";
import Nav_request from "../components/layout/nav/nav_request";
import Nav_call from "../components/layout/nav/nav_call";
import Alert_form from "../components/form/alert_form";
import styled from "styled-components";
import Image from "next/image";
import { AuthContext } from "../appState/authProviceder";
import React, { useContext } from "react";

const Div = styled.div`
  .but_readMore_mb {
    display: none;
  }
  @media (max-width: 414px) {
    .but_readMore_pc {
      display: none;
    }
    .but_readMore_mb {
      display: block;
    }
  }
`;
const Home = (props) => {
  const {
    setgobal_filter_menu_api,
    setGobal_search_filter_api,
    Purpose_filter,
    setPurpose_filter,
  } = useContext(AuthContext);
  if (props) {
    setgobal_filter_menu_api(props.flilter_menu_api);
    setGobal_search_filter_api(props.search_menu_api.data.list);
  }
  const label = { inputProps: { "aria-label": "Switch demo" } };
  console.log(props);
  function GoToReadMore() {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  }
  function GoToReadMore_MB() {
    window.scrollTo({
      top: 9480,
      behavior: "smooth",
    });
  }

  return (
    <Div>
      <Alert_form />
      <CustomSeparator />
      <div>
        <h1 className="jr_sky">Property for sale in Bangkok, Thailand</h1>
        <h2>4,200 properties available on Accomasia</h2>
        <p>
          Explore 3,134 properties for sale in Bangkok. View 360 , full details.
          Update new properties. Talk and tour properties with our expert agents
          / AccomAsia team
        </p>
      </div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <button
          className="but_primary_w but_readMore_pc"
          onClick={GoToReadMore}
        >
          Learn more
          <ArrowDownwardIcon className="jr_icon" />
        </button>
        <button
          className="but_primary_w but_readMore_mb"
          onClick={GoToReadMore_MB}
        >
          Learn more
          <ArrowDownwardIcon className="jr_icon" />
        </button>
        <div>
          map
          <Switch {...label} />
        </div>
      </Stack>
      <Product_item data_list={props.data_filter_list} />

      <a href="#">
        <Image
          src="https://i.ibb.co/d7RbVn4/discount-banner.jpg"
          alt="Picture of the author"
          width={16}
          height={6}
          layout="responsive"
        />
      </a>
      <Nav_contact />
      <Nav_call />
      <Pagination_jr />
      <Accordion_items />
    </Div>
  );
};


export async function getStaticProps({ params }) {
  console.log(params);
  let search_input = "";
  console.log();
  const res_flilter_menu_api = await fetch(
    "https://www.accomasia.co.th/api/v1/masterdata"
  );
  const flilter_menu_api = await res_flilter_menu_api.json();

  const res_search_menu_api = await fetch(
    `https://www.accomasia.co.th/api/v1/search_advanced?search_txt=${search_input}`
  );
  const search_menu_api = await res_search_menu_api.json();

  const res_filter_list = await fetch(
    `https://www.accomasia.co.th/api/v1/property?txtsearch=Assumption`
  );
  const filter_list = await res_filter_list.json();

  return {
    props: {
      flilter_menu_api: flilter_menu_api,
      search_menu_api: search_menu_api,
      data_filter_list: filter_list,
    },
  };
}
export default Home;
