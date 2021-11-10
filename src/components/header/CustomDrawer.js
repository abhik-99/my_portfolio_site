/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';

import { useTheme } from '@emotion/react';

export default function CustomDrawer(props) {
  const {open, toggleDrawer, navSections} = props;
  const theme = useTheme();
  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {navSections.map((link, index) => (
          <ListItem button key={"drawer-"+index} onClick={() => {link.onClick(); toggleDrawer(false);}}>
            <ListItemIcon>
              {link.icon}
            </ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <Box sx={{ display: 'flex' , justifyContent: "center", padding: theme.spacing(1)}}>
          <Button variant="contained" color="secondary" onClick={() => toggleDrawer(false)}>
            <ChevronRightIcon />
          </Button>
        </Box>
        {list()}
        <Box sx={{ display: 'flex' , justifyContent: "center", padding: theme.spacing(1)}}>
          <Button startIcon={<DownloadTwoToneIcon />} download variant="contained" css={css`text-transform: none;`}>Resume</Button>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
