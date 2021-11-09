/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Color from "color";
import {
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";

import { useTheme } from '@mui/material/styles';
import TabView from "./TabView";

const Honours = () => {
    const theme = useTheme();
    return (
		<Container css={css`
		padding: ${theme.spacing(4)} 0;
		margin-top: ${theme.spacing(10)};
		padding-bottom: ${theme.spacing(10)};
		`}>
			<Paper css={css`
			padding: ${theme.spacing(4)};
			background: ${Color(theme.palette.background.paper).alpha(0.6).toString()};
			backdrop-filter: ${ theme.palette.extra === "glass" ? `blur(15px)` : null};
			border-radius: ${theme.shape.borderRadius}
			`}>
				<Typography variant="h2">
					My Blogs
				</Typography>
                <TabView />
			</Paper>
		</Container>
    )
}

export default Honours
