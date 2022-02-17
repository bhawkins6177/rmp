
import * as React from 'react';
import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';// or try /core
import {Link, useNavigate, useLocation} from 'react-router-dom';

function Header(){
  const navigate = useNavigate();
  
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));// set the defaut state to the user in localstorage if it exists


  useEffect(()=> {
    const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')))
},[location]);
  console.log(user)
  // const user = false;



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
          </Typography>{ user ? (
            <>
            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography variant="h6">{user.result.name}</Typography>
            <Button>Logout</Button>
            </>
          ) :(
            <Button component={Link} to="/auth"color="inherit">Login</Button>
          )
          }
          
          <Button component={Link} to='/services' color="inherit">Services</Button>
          <Button component={Link} to='/about' color="inherit">About</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    )
}
export default Header;