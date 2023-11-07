import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';




import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import TopBar from '../TopBar/TopBar';
import SideBar from '../SideBar/SideBar';
import {Outlet}  from 'react-router-dom';

const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function Homepage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar handleDrawerOpen={handleDrawerOpen} open={open}/>

      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
         
ZIAD AHMED
       
       
      </Box>
   


    </Box>
  );
}