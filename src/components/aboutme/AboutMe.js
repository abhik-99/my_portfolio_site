/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Color from "color";
import {
  Button,
  ButtonBase,
  Container,
  Box,
  Grid,
  Paper,
  Typography,
	Grow,
	Fade,
	useMediaQuery
} from "@mui/material";

import { useTheme } from '@mui/material/styles';
import me_devfest from "../../assets/images/abhik_banerjee_devfest.jpeg";

const AboutMe = () => {
	const theme = useTheme();
	return (
		<Container css={css`
		padding: ${theme.spacing(4)} 0;
		`}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} align="center" css={css`background: url("./assets/images/blob.svg")`}>
					<Grow in={true} timeout={800}>
						<ButtonBase css={css`border-radius: 50%;`}>
							<img src={me_devfest} alt="Abhik Banerjee" css={css`
							border-radius: 50%;
							height: ${useMediaQuery(theme.breakpoints.up("md")) ? "400px" : "250px"}
							`}/>
						</ButtonBase>
					</Grow>
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
							marginTop: {
								md: theme.spacing(10),

							}
						}}>
							<Fade in={true} timeout={900}>
								<Box sx={{ textAlign: 'center'}}>
									<Typography variant="h3">
										Abhik Banerjee
									</Typography>
								</Box>
							</Fade>
							<br/>
							<Fade in={true} timeout={1000}>

								<Typography>
									&ldquo;<i>I am the perfect developer</i>&rdquo; -

									said Nobody, <b>EVER</b>
									<br />
									I strive to be a Developer with a wide range and a sharp edge. I prefer to be the classic, overpowered character that defines the anime arc and helps the team to victory.
								</Typography>

							</Fade>
						</Box>
						<Fade in={true} timeout={1500}>
							<Button color="secondary" variant="contained">Get in Touch</Button>
						</Fade>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutMe;
