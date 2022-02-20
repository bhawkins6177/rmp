
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer(){
    let year = "2022"
    return(
        <Box sx={{ 
            flexGrow: 1,
            width: '100%',
            position: 'fixed',
            bottom: 0, }}>
        <AppBar position="static"
        sx={{
          background: 'transparent', boxShadow: 'none'
        }}>
          <Toolbar sx={{
            justifyContent: "space-evenly"
        }}>
            
            <Typography  component="div">
                Created by Brandon Hawkins
            </Typography>
            <Typography  component="div">
                Copyright © {year}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}
export default Footer;