/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {css} from "@emotion/react";
import {
  Paper,
  useMediaQuery,
  Typography
} from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';


import squid_game_light from "./assets/images/squid_game_light.png";
import squid_game_dark from "./assets/images/squid_game_dark.png";

import Color from "color";

import {
  ScrollingProvider,
  Section,
} from 'react-scroll-section';

import AboutMe from "./components/aboutme/AboutMe";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Research from "./components/research/Research";
import Blogs from "./components/blogs/Blogs";
import Honours from "./components/honours/Honours";
import Contact from "./components/contact/Contact";
import { Box } from "@mui/system";

function App() {
  const [themeMode, setThemeMode] = useState(true); // true -> light | false -> dark
  const [extraMode, setExtraMode] = useState(true); // true -> normal | false -> glassmorphic

  let theme = createTheme({
    palette: {
      mode: themeMode ? "light" : "dark",
      extra: extraMode ? "normal" : "glass",
      primary: {
        main: themeMode ? "#2e7d32" : "#76ff03",
      },
      secondary: {
        main: themeMode ? "#880e4f" : "#651fff"
      }
    },
    shape: {
      borderRadius: 8
    }
  });

  theme = createTheme(theme, {
    components: {
      MuiTab: {
        styleOverrides: {
          root:{
            "&.Mui-selected": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              borderRadius: "25px"
            },
          }
        }
      }
    }
  })
  theme = responsiveFontSizes(theme);

  console.log(useMediaQuery(theme.breakpoints.down("xs")), useMediaQuery(theme.breakpoints.down("sm")), useMediaQuery(theme.breakpoints.down("md")), useMediaQuery(theme.breakpoints.down("lg")), useMediaQuery(theme.breakpoints.down("xl")));
  console.log(theme);
  return (
    <ScrollingProvider>
      <ThemeProvider theme={theme}>
        <Paper css={css`
        min-height: 100vh;
        min-width: 100%;
        background-image: ${themeMode && !extraMode ? `url(${squid_game_light})` : (!themeMode && !extraMode ? `url(${squid_game_dark})` : null)};
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-color: ${Color(theme.palette.background.paper).darken(0.1).toString()};
        padding-top: ${theme.spacing(10)}
        `}>
          <Section id="top">
            <Header theme1={() => { setThemeMode(true); setExtraMode(true);}} theme2={() => { setThemeMode(true); setExtraMode(false);}} theme3={() => { setThemeMode(false); setExtraMode(true);}} theme4={() => { setThemeMode(false); setExtraMode(false);}}/>
          </Section>
          <Section id="About">
            <AboutMe />
          </Section>
          <Section id="Experience">
            <Experience />
          </Section>
          <Section id="Research">
            <Research />
          </Section>
          <Section id="Blogs">
            <Blogs />
          </Section>
          <Section id="Honours">
            <Honours />
          </Section>
          <Section id="Contact">
            <Contact />
          </Section>
          <Box sx={{align: "center"}}>
            <Typography variant="caption2">Made By Abhik Banerjee using React and MUI v5. Open Sourced <a href="https://github.com/abhik-99/my_portfolio_site" target="_blank">here</a></Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </ScrollingProvider>
  );
}

export default App;
