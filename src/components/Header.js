
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link } from 'react-router-dom';

function Header(){
    return (
 <Box sx={{ 
   flexGrow: 1,
   paddingBottom: '50px' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component={Link} to='/' variant="h5" 
          sx={{
            flexGrow: 1,
            color: "white",
            textAlign: 'left',
            fontFamily: 'unset'
            }}>
            RMP Aeration
          </Typography>
          <Button component={Link} to='/services' color="inherit">Services</Button>
          <Button component={Link} to='/about' color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}
export default Header;