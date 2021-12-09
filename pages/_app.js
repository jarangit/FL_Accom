import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";

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
      dark: '#002884',

    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <Button color="primary" variant="contained">
          Hi
        </Button>
        <Typography variant="h1">Jaran</Typography>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
