/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  ButtonGroup
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { navlist } from "./Navlist";

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';

const Header = (props) => {
	const theme = useTheme();
	const { theme1, theme2, theme3, theme4 } = props;
	return (
		<AppBar
		color="primary"
		position="static"
		enableColorOnDark
		>
			<Toolbar align="center">
				<ButtonGroup variant="contained" color="secondary">
					<Button>
						<CircleOutlinedIcon onClick={theme1}/>
					</Button>
					<Button>
						<ChangeHistoryOutlinedIcon onClick={theme2}/>
					</Button>
					<Button>
						<StarBorderPurple500OutlinedIcon onClick={theme3}/>
					</Button>
					<Button>
						<BeachAccessOutlinedIcon onClick={theme4}/>
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
	)
}

export default Header;
