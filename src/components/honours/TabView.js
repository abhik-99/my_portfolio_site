/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Button, Stack } from '@mui/material';


import TabPanelView from "./TabPanelView";
import Color from "color";
import { certificates, honours } from "./honours";
import CardViewPanel from "./CardViewPanel";

const TabView = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	return (
		<Box sx={{ width: '100%', typography: 'body1', marginTop: theme.spacing(3) }}>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={3}  lg={2}>
					<Box sx={{ borderBottom: 1, borderColor: theme.palette.background.paper }}>
						<Stack>
							<Button variant="contained" color="secondary" css={css`
								background: ${value === 0 ? null : Color(theme.palette.background.paper).alpha(0.12).toString()};
								color: ${value === 0 ? null : Color(theme.palette.text.primary).alpha(0.26).toString()};
								border-radius: 50% 50% 0 0 / 100% 100% 0 0;
								border-bottom: 0;
								text-transform: none;
							`}
							onClick={() => setValue(0)}
							>
								<Typography> Awards </Typography>
							</Button>
							<Button variant="contained" color="secondary" css={css`
								background: ${value === 1 ? null : Color(theme.palette.background.paper).alpha(0.12).toString()};
								color: ${value === 1 ? null : Color(theme.palette.text.primary).alpha(0.50).toString()};
								border-radius: 0 0 50% 50% / 0 0 100% 100%;
								border-top: 0;
								text-transform: none;
								box-shadow: 0 5px 15px ${Color(theme.palette.secondary.main).alpha(40)};
							`}
							onClick={() => setValue(1)}
							>
								<Typography> Certs </Typography>
							</Button>
						</Stack>
					</Box>
					</Grid>
					<Grid item xs={12} sm={9} ls={10}>
						{/* <Paper> */}
							{
								value === 0 &&
								<TabPanelView dataList={honours} />
							}
							{
								value === 1 &&
								<CardViewPanel dataList={certificates} />
							}
						{/* </Paper> */}
					</Grid>
				</Grid>
    </Box>
	)
}

export default TabView;
