/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from "@emotion/react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, Grid } from '@mui/material';


import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

import {emails, socials} from "./contacts";

const TabView = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<Box sx={{
			marginTop: theme.spacing(1),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
      <TabContext value={value} >
        <Box sx={{
					width: {
						xs: '90%',
						md:'60%'
					},
					borderBottom: 1,
					borderColor: 'divider',
					zIndex: 2
				}}>
          <TabList onChange={handleChange} aria-label="experience tab"
          TabIndicatorProps={{
            style: {
              display: "none"
            }
          }}
          css={css`
            background: ${theme.palette.secondary.light};
						border-radius: ${theme.shape.borderRadius}px;
          `}
					variant="fullWidth"
          >
            <Tab icon={<AlternateEmailTwoToneIcon />} label="Email" css={css`text-transform: none;`} value="1" />
            <Tab icon={<MessageTwoToneIcon />} label="Social" css={css`text-transform: none;`} value="2" />
          </TabList>
        </Box>
				<Box sx={{
					width: {
						xs: '100%',
						md:'80%',
						lg: '70%'
					},
					backgroundColor: theme.palette.background.paper,
					zIndex: 1,
				}}
				css={css`margin-top: -${theme.spacing(4)}; padding-top:${theme.spacing(4)} `}>
        <TabPanel value="1" >
					<List>
					{
						emails.map((item, index)=>
						<ListItem key={"emails-"+index}>
							<ListItemText  align="center">{index+1}. {item}</ListItemText>
						</ListItem>
						)
					}
					</List>
        </TabPanel>
        <TabPanel value="2">
					<List>
						<Grid container spacing={2}>
						{
							socials.map((item, index)=>
							<Grid key={"socials-"+index} item xs={12} sm={6} md={4}>
								<ListItem component="a" href={item.link} target="_blank">
									<ListItemButton >
										<ListItemIcon >{item.icon}</ListItemIcon>
										<ListItemText ><Typography color='text.primary'>{item.name}</Typography></ListItemText>
									</ListItemButton>
								</ListItem>
							</Grid>
							)
						}
						</Grid>
					</List>
        </TabPanel>
				</Box>
      </TabContext>
    </Box>
	)
}

export default TabView;