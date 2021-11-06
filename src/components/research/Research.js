/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {
	Container,
	Paper,
	Typography,
	useTheme
} from "@mui/material";
import Color from "color";

import background_light from "../../assets/images/research_background_light.webp";
import background_dark from "../../assets/images/research_background_dark.webp";
import TabView from "./TabView";

const Research = () => {
	const theme = useTheme();
	return (
		<div css={css`
		background-image: url(${ theme.palette.mode === "light" && theme.palette.extra === "glass" ? background_light : (theme.palette.mode === "dark" && theme.palette.extra === "glass" ? background_dark : 'none')});
		background-color: linear-gradient(to top, ${Color(theme.palette.background.paper).alpha(0.6).toString()}, ${Color(theme.palette.background.paper).alpha(0.1).toString()});
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		padding-bottom: ${theme.spacing(10)};
		`}>
			<Container css={css`
			padding: ${theme.spacing(4)} 0;
			`}>

				<Paper css={css`
				padding: ${theme.spacing(4)};
				margin-top: ${theme.spacing(10)};
				background: ${Color(theme.palette.background.paper).alpha(0.6).toString()};
				backdrop-filter: ${ theme.palette.extra === "glass" ? `blur(15px)` : null};
				border-radius: ${theme.shape.borderRadius}
				`}>
					<Typography variant="h2">
						Research
					</Typography>
					<TabView />
				</Paper>
			</Container>

		</div>
	)
}

export default Research
