/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {css} from "@emotion/react";
import Color from "color";
import {
  AppBar,
  Button,
  ButtonBase,
  Container,
  Box,
  Grid,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  Divider,
  ButtonGroup,
  IconButton
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { navlist } from "./Navlist";

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';


import me_devfest from "./assets/images/abhik_banerjee_devfest.jpeg";
import squid_game_light from "./assets/images/squid_game_light.png";
import squid_game_dark from "./assets/images/squid_game_dark.png";

function App() {
  const [themeMode, setThemeMode] = useState(true); // true -> light | false -> dark
  const [extraMode, setExtraMode] = useState(true); // true -> normal | false -> glassmorphic

  const theme = createTheme({
    palette: {
      mode: themeMode ? "light" : "dark",
      extra: extraMode ? "normal" : "glass",
      primary: {
        main: themeMode ? "#2e7d32" : "#76ff03",
      },
      secondary: {
        main: themeMode ? "#880e4f" : "#651fff"
      }
    }
  })
  console.log(useMediaQuery(theme.breakpoints.down("xs")), useMediaQuery(theme.breakpoints.down("sm")), useMediaQuery(theme.breakpoints.down("md")), useMediaQuery(theme.breakpoints.down("lg")), useMediaQuery(theme.breakpoints.down("xl")));
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
    <Paper css={css`
    min-height: 100vh;
    min-width: 100%;
    background-image: ${themeMode && !extraMode ? `url(${squid_game_light})` : (!themeMode && !extraMode ? `url(${squid_game_dark})` : null)};
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    `}>
      <AppBar
      color="primary"
      position="static"
      enableColorOnDark
      >
        <Toolbar align="center">
          <ButtonGroup variant="contained" color="secondary">
            <Button>
              <CircleOutlinedIcon onClick={() => { setThemeMode(true); setExtraMode(true);}}/>
            </Button>
            <Button>
              <ChangeHistoryOutlinedIcon onClick={() => { setThemeMode(true); setExtraMode(false);}}/>
            </Button>
            <Button>
              <StarBorderPurple500OutlinedIcon onClick={() => { setThemeMode(false); setExtraMode(true);}}/>
            </Button>
            <Button>
              <BeachAccessOutlinedIcon onClick={() => { setThemeMode(false); setExtraMode(false);}}/>
            </Button>
          </ButtonGroup>
        </Toolbar>
        <Container>
          <Stack direction="row" spacing={2} justifyContent="center">
            {
              navlist.map((link, index) =>
              <Button variant="contained" css={css`text-transform: none; background: linear-gradient(to top, rgba(0, 0, 0, 0.2), ${theme.palette.primary.main})`} key={"nav" + index}>
                <b>{link.name}</b>
              </Button>
              )
            }
          </Stack>
        </Container>
      </AppBar>

      {/* About me container */}
      <Container css={css`
      padding: ${theme.spacing(4)} 0;
      `}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} align="center" css={css`background: url("./assets/images/blob.svg")`}>
            <ButtonBase css={css`border-radius: 50%;`}>
              <img src={me_devfest} alt="Abhik Banerjee" css={css`
              border-radius: 50%;
              height: 500px;
              `}/>
            </ButtonBase>
          </Grid>

          <Grid item xs={12} md={6} css={css`
          display: flex;
          align-items: center;

          `}>

            <Paper css={css`
            padding: ${theme.spacing(4)};
            text-align: center;
            border-radius: ${theme.shape.borderRadius};
            background: linear-gradient(to bottom, ${Color(theme.palette.background.paper).alpha(0.1).toString()}, ${Color(theme.palette.background.paper).alpha(0.8).toString()});
            backdrop-filter: ${ theme.palette.extra === "glass" ? `blur(15px)` : null};
            `}>
              <Box sx={{
                textAlign: 'justify',
                margin: theme.spacing(3),
                marginTop: theme.spacing(10)
              }}>
                <Typography>
                  &ldquo;<i>I am the perfect developer</i>&rdquo; -

                  said Nobody, <b>EVER</b>
                </Typography>
                <br/>
                <Typography>
                  I strive to be a Developer with a wide range and a sharp edge. I prefer to be the classic, overpowered character that defines the anime arc and helps the team to victory.
                </Typography>
              </Box>
              <Button color="secondary" variant="contained">Get in Touch</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Experience Section here */}
      <Container css={css`
      padding: ${theme.spacing(4)} 0;
      `}>
        <Paper css={css`
        padding: ${theme.spacing(4)};
        background: ${Color(theme.palette.background.paper).alpha(0.1).toString()};
        backdrop-filter: ${ theme.palette.extra === "glass" ? `blur(15px)` : null};
        `}>


        </Paper>
      </Container>

    </Paper>
    </ThemeProvider>
  );
}

export default App;
