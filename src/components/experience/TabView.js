/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from "@emotion/react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/system';

import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';

import { volunteer, work } from "./experiences";
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="experience tab" indicatorColor="none">
            <Tab icon={<WorkTwoToneIcon />} aria-label="work" value="1" />
            <Tab icon={<VolunteerActivismTwoToneIcon />} aria-label="Volunteer" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" css={css`
					padding-left: 0;
        `}>
          <TabPanelView title="Work" dataList={work} />
        </TabPanel>
        <TabPanel value="2">
          <TabPanelView title="Volunteer" dataList={volunteer} />
        </TabPanel>
      </TabContext>
    </Box>
	)
}

export default TabView;