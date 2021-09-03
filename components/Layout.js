import Head from "next/head";
import { AppBar, Container, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navbar from "./Navbar/Navbar";
import useStyles from "../utils/styles";

const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f2f2f2',
      },
      secondary: {
        main: '#f7f7f7'
      },
    },

  });



  const classes = useStyles();
  return (
    <>
      {/* SEO */}
      <Head>
        <title>{title ? `${title} - TechIthouse` : 'TechIthouse'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        {/* <AppBar className={classes.navbar} position="sticky">
          <Toolbar>
            <Typography component="h1" variant="h1" color="primary"  >
              TechIthouse
            </Typography>
          </Toolbar>
        </AppBar> */}
        < Navbar />
        <Container   className={classes.main} >
          {children}
        </Container>
        <footer className={classes.footer} >
          <h2>footer techithouse</h2>
        </footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
