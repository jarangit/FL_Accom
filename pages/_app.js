import Layout from "../components/layout/layout";
import "../styles/globals.css";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { fontWeight, letterSpacing } from "@mui/system";
import AuthProvider from "../appState/authProviceder";
import LinearProgress from "@mui/material/LinearProgress";

const theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: ["Montserrat", "Sarabun", " sans-serif"].join(","),
    h1: {
      fontSize: 32,
      marginTop: 5,
      marginBottom: 5,
    },
    h2: {
      fontSize: 24,
      marginTop: 5,
      marginBottom: 5,
    },
    h3: {
      fontSize: 18,
      marginTop: 5,
      marginBottom: 5,
    },
    h4: {
      fontSize: 16,
      marginTop: 5,
      marginBottom: 5,
    },
    body1: {
      lineHeight: 2,
      // fontSize: "16px",
    },
    button: {
      textTransform: "none",
      fontSize: "16px",
    },
  },
  
  palette: {
    primary: {
      main: "#002161",
      // light: "#757ce8",
      // dark: "#002884",
    },
  },
  
});

function MyApp({ Component, pageProps }) {
  if (typeof window === "undefined") {
    return <LinearProgress />;
  }
  return (
    // <ApolloProvider client={apollo}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <div>
            <Component {...pageProps} />
          </div>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
    // </ApolloProvider>
  );
}

export default MyApp;
