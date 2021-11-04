/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/system';

import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import { Grid, Paper, Typography } from "@mui/material";


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
        <TabPanel value="1">
          <Grid container>
            <Grid item xs={12} md={4} lg={2} align="center">
              <Paper css={css`padding: ${theme.spacing(2)}; background: ${theme.palette.primary.main}; color: ${theme.palette.primary.contrastText}`}>
                <Typography variant="h6">Work</Typography>
              </Paper>
            </Grid>

          </Grid>

        </TabPanel>
        <TabPanel value="2">
          <Grid container>
            <Grid item xs={12} md={4} lg={2} align="center">
              <Paper css={css`padding: ${theme.spacing(2)}; background: ${theme.palette.primary.main}; color: ${theme.palette.primary.contrastText}`}>
                <Typography variant="h6">Volunteer</Typography>
              </Paper>
            </Grid>

          </Grid>


        </TabPanel>
      </TabContext>
    </Box>
	)
}

export default TabView;