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

import navlist from './Navlist';
import { useTheme } from '@emotion/react';

export default function CustomDrawer(props) {
  const {open, toggleDrawer} = props;
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
        {navlist.map((link, index) => (
          <ListItem button key={"drawer-"+index}>
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
      </SwipeableDrawer>
    </div>
  );
}
