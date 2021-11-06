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
import BlogCard from "./BlogCard";

const Blogs = () => {
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
				<Grid container spacing={2} justifyContent="center">
					<Grid item xs={12} md={6} lg={4} align="center">
						<BlogCard title="abhik99" link="https://abhik99.medium.com/" imgLink="https://miro.medium.com/max/800/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"/>
					</Grid>
					<Grid item xs={12} md={6} lg={4} align="center">
						<BlogCard title="abhikbanerjee99" link="https://dev.to/abhikbanerjee99" imgLink="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"/>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	)
}

export default Blogs
