import Layout from "../components/layout/layout";
import "../styles/globals.css";
import {
  Button,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { fontWeight, letterSpacing } from "@mui/system";

const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: ["Montserrat", " sans-serif"].join(','),

    h1: {
      fontSize: 32,
      fontWeight: "100px",
      marginTop: 5,
      marginBottom: 5,
    },
    h2: {
      fontSize: 24,
      fontWeight: "100px",
      marginTop: 5,
      marginBottom: 5,
    },
    h3:{
      fontSize: 18,
      marginTop: 5,
      marginBottom: 5,
    },
    h4:{
      fontSize: 16,
      marginTop: 5,
      marginBottom: 5,
    },
    body1: {
      lineHeight: 2,
      // fontSize: "16px",
    },
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
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
