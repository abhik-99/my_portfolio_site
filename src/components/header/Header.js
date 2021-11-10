/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from "@emotion/react";
import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  ButtonGroup,
	IconButton,
	Paper,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import navlist from "./Navlist";

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "./CustomDrawer";

import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';

import {
	useScrollSections,
} from 'react-scroll-section';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	  target: window ? window() : undefined,
	});

	return (
	  <Slide appear={false} direction="down" in={!trigger}>
		{children}
	  </Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

const Header = (props) => {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const { theme1, theme2, theme3, theme4 } = props;
	const toggleDrawer = (value) => {
		setOpen(value);
	};
	const sections = useScrollSections();
	const navSections = navlist.map((nav, index) => {
		const section = sections.filter(item => item.id === nav.name)[0];
		return { ...nav, ...section}
	});

	return (
		<>
		<HideOnScroll {...props}>
			<AppBar
			color="primary"
			// position="static"
			enableColorOnDark
			>
				<Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
					<Paper sx={{ background: 'none', display: {xs: 'block', md: 'none'}}} elevation={0}>
						<IconButton variant="outlined" color="secondary" onClick={() => toggleDrawer(true)}>
							<MoreVertTwoToneIcon />
						</IconButton>
					</Paper>
					<Paper sx={{ background: 'none', display: {xs: 'none', md: 'block', lg: 'none'}}} elevation={0}>
						<Button variant="contained" color="secondary"  onClick={() => toggleDrawer(true)}>
							<MenuIcon />
						</Button>
					</Paper>
				</Toolbar>
				<Paper sx={{background: "none", display: { xs: 'none', lg: 'block'}}} elevation={0}>
					<Container>
						<Stack direction="row" spacing={2} justifyContent="center">
							{
								navSections.map((link, index) =>
								<Button variant="contained" css={css`text-transform: none; background: linear-gradient(to top, rgba(0, 0, 0, 0.2), ${theme.palette.primary.main})`} key={"nav" + index} onClick={link.onClick}>
									<b>{link.name}</b>
								</Button>
								)
							}
							<Button href="../../assets/docs/Abhik Banerjee.pdf" target="_blank" startIcon={<DownloadTwoToneIcon />} download variant="contained" css={css`text-transform: none; background: linear-gradient(to top, rgba(0, 0, 0, 0.2), ${theme.palette.primary.main})`}>Resume</Button>
						</Stack>
					</Container>
				</Paper>
			</AppBar>
		</HideOnScroll>

		<CustomDrawer open={open} toggleDrawer={toggleDrawer} navSections={navSections}/>
		</>
	)
}

export default Header;
