import Layout from "../components/layout/layout";
import "../styles/globals.css";
import {
  Button,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 12,
    h1: 32,
    h2: 24,
    h3: 18,
    h4: 14,
    body1: 16,
  },
  palette: {
    primary: {
      main: "#002161",
      light: "#757ce8",
      dark: "#002884",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div className="jr_container">
        <Component {...pageProps} />

        </div>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
        </Grid> */}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
