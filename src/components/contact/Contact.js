/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Color from "color";
import {
  Container,
  Paper,
  Typography
} from "@mui/material";

import { useTheme } from '@mui/material/styles';
import TabView from "./TabView";

const Contact = () => {
	const theme = useTheme();
	return (
		<Container css={css`
		padding: ${theme.spacing(4)} 0;
		margin-top: ${theme.spacing(10)};
		padding-bottom: ${theme.spacing(10)};
		`}>
			<Paper css={css`
				padding: ${theme.spacing(4)};
				backdrop-filter: ${ theme.palette.extra === "glass" ? `blur(15px)` : null};
				border-radius: ${theme.shape.borderRadius};
				background-color: ${Color(theme.palette.background.paper).darken(0.05).alpha(0.6).toString()};
			`}>
				<Typography variant="h2">
					Reach Me
				</Typography>
				<TabView />
			</Paper>
		</Container>
	)
}

export default Contact
