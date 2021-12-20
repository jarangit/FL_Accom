import { Button, Stack, Typography, Switch } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import CustomSeparator from "../components/layout/bread";
import Filter_bar from "../components/layout/filter";
import styles from "../styles/Home.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Product_item from "../components/layout/product_item";
import Nav_contact from "../components/layout/nav_contact";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Accordion_items from "../components/layout/accordion";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Pagination_jr from "../components/layout/pagination";
export default function Home() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  function GoToReadMore() {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <CustomSeparator />
      <div>
        <Typography variant="h1" className="jr_sky">
          <strong> Property for sale in Bangkok, Thailand</strong>
        </Typography>
        <Typography variant="h2">
          <strong>
            4,200 properties available on Accomasia for sale in Bangkok,
            Thailand
          </strong>
        </Typography>
        <Typography variant="body1">
          Explore 3,134 properties for sale in Bangkok. View 360 , full details.
          Update new properties. Talk and tour properties with our expert agents
          / AccomAsia team
        </Typography>
      </div>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <button className="but_primary_w" onClick={GoToReadMore}>
          Learn more
          <ArrowDownwardIcon className="jr_icon" />
        </button>
        <div>
          map
          <Switch {...label} />
        </div>
      </Stack>

      <Product_item />
      <Product_item />
      <Product_item />
      <Product_item />
      <Nav_contact />

      <Pagination_jr />

      <Accordion_items />
    </div>
  );
}
