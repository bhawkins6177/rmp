
import * as React from 'react';
import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkM from "@mui/material/Link";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';// or try /core
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Header(){
  const navigate = useNavigate();
  
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));// set the defaut state to the user in localstorage if it exists
  const dispatch = useDispatch();

  useEffect(()=> {
    const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')))
},[location]);
  console.log(user)
  // const user = false;

  function logout(){
    dispatch({type:'LOGOUT'})
    setUser(null)
    navigate('/')
  }

    return (
 <Box sx={{ 
   flexGrow: 1,
   paddingBottom: '20px'}}>
      <AppBar position="static"
      sx={{
        background: 'transparent', boxShadow: 'none'
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography fontFamily={'fantasy'} component={Link} to='/' variant="h5" 
          sx={{
          
            flexGrow: 1,
            color: "white",
            textAlign: 'left',
            fontStyle: 'italic',
            }}>
            RMP Aeration
          </Typography>
          <LinkM underline="none" color="inherit" href="rpmaeration@gmail.com">rpmaeration@gmail.com</LinkM>
          { user ? (
            <>
            <Typography variant="h6">{`Welcome ${user.result.name.split(' ')}!`}</Typography>
            <Button color="inherit" onClick={logout}>Logout</Button>
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