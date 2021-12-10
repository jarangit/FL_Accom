import { Button, Stack, Typography, Switch } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import CustomSeparator from "../components/layout/bread";
import Filter_bar from "../components/layout/filter";
import styles from "../styles/Home.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Product_item from "../components/layout/product_item";
import Nav_contact from "../components/layout/nav_contact";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function Home() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <Filter_bar />
      <CustomSeparator />
      <div>
        <Typography variant="h1" color="primary">
          Property for sale in Bangkok, Thailand
        </Typography>
        <Typography variant="h2">
          4,200 properties available on Accomasia for sale in Bangkok, Thailand
        </Typography>
        <Typography variant="body1">
          Explore 3,134 properties for sale in Bangkok. View 360 , full details.
          Update new properties. Talk and tour properties with our expert agents
          / AccomAsia team
        </Typography>
      </div>

      <Stack direction="row" justifyContent="space-between">
        <Button variant="outlined" color="primary">
          Learn more
          <ArrowDownwardIcon />
        </Button>
        <div>
          map
          <Switch {...label} />
        </div>
      </Stack>

      <Product_item />
      <Nav_contact />

      <Stack direction="row" justifyContent="space-between">
        <Button variant="outlined" color="primary">
          Back to top
          <ArrowDownwardIcon />
        </Button>
        <div>
          <Stack direction="row">
            <Button variant="contained" color="primary">
              <ArrowLeftIcon />
            </Button>
            <Button variant="outlined" >
              10
            </Button>
            <Button variant="text" >
              of 420
            </Button>            <Button variant="contained" color="primary">
              <ArrowRightIcon />
            </Button>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
