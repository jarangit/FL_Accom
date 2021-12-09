import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
const Div = styled.div`
  background-color: #f9f9f9;
  padding: 0 60px;
  height: 100px;
`;
const Menu = () => {
  return (
    <Div>
      <Grid
        container
        spacing={2}
        textAlign="center"
        alignItems="center"
        sx={{ height: "80px" }}
      >
        <Grid item xs={12} sm={3}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img
              src="https://cdn.zeplin.io/5e6c97d09536901139b8706b/assets/59B582B6-D023-406B-8BE0-F90FE96E2CCB.png"
              width="80"
            />
            <a href="/">Rent</a>
            <a href="/">Buy</a>
            <a href="/">Projects</a>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={5}></Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" justifyContent="space-between">
            <a href="/">Guide</a>
            <a href="/">Agent partner</a>
            <a href="/">Eng</a>
            {/* <List>
              <ListItem>
                <ListItemText primary="Eng" />
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
              </ListItem>
            </List> */}
            <Button variant="contained" style={{background: "#65acf0"}}>
              Sign in
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Div>
  );
};

export default Menu;
