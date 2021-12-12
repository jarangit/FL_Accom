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
    fontWeight: "100px",

    h1: {
      fontSize: 32,
      lineHeight: 2,
      fontWeight: "100px",
    },
    h2: {
      lineHeight: 1,
      fontSize: 24,
      fontWeight: "100px",
    },
    h3: 18,
    h4: 14,
    body1: {
      lineHeight: 2,
      fontSize: "16px",
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
