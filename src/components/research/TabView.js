/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/system';
import { Typography, Grid, Divider } from '@mui/material';


import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';

import { papers } from './papers';
import TabPanelView from "./TabPanelView";

const TabView = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<Box sx={{ width: '100%', typography: 'body1', marginTop: theme.spacing(1) }}>
      <TabContext value={value} >
				<Grid container spacing={1}>
					<Grid item xs={12} sm={3} lg={2} >
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList orientation="vertical" onChange={handleChange} aria-label="research tab"
						TabIndicatorProps={{
							style: {
							  display: "none"
							}
						}}
						>
							<Tab icon={<MenuBookTwoToneIcon />} aria-label="published" value="1" />
							<Divider />
							<Tab icon={<BorderColorTwoToneIcon />} aria-label="in press" value="2" />
							<Divider />
							<Tab icon={<VisibilityTwoToneIcon />} aria-label="under review" value="3" />
						</TabList>
					</Box>
					</Grid>
					<Grid item xs={12} sm={9} ls={10}>
						<TabPanel value="1" css={css`
						padding: 0;
						`}>
							<TabPanelView title="Published" dataList={papers.filter(paper => paper.published)}/>
						</TabPanel>
						<TabPanel value="2" css={css`
						padding: 0;
						`}>
							<TabPanelView title="In Press" dataList={papers.filter(paper => paper.inPress)}/>
						</TabPanel>
						<TabPanel value="3" css={css`
						padding: 0;
						`}>
							<TabPanelView title="Under Review" dataList={papers.filter(paper => paper.underReview)}/>
						</TabPanel>
					</Grid>
				</Grid>
      </TabContext>
    </Box>
	)
}

export default TabView;
