import React from "react";
import grass1 from './img/grass1.jpg'
import grass2 from './img/grass2.jpg'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TypeWriter from './TypeWriter'
import MailIcon from '@mui/icons-material/Mail';
import Link from "@mui/material/Link"
import IconButton from '@mui/material/IconButton'


function AltBody() {
    return(
        <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        position: 'relative',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
      }}
    >
      
     
      <Grid container justifyContent={'center'}>
        <Grid item >
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom fontFamily={"fantasy"}>
              Quality Lawn Care Services
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom fontFamily={"fantasy"}>
              You Can Trust 
            </Typography>
            <TypeWriter />
            <Typography sx={{
              paddingBottom: '5px',
              paddingTop: '50px'
            }}>
              Reach out!
            </Typography>
            <IconButton size='large' color= "inherit" href="mailto:rpmaeration@gmail.com">
              <MailIcon />
            </IconButton>
              
            
            
            
          </Box>
        </Grid>
      </Grid>
    </Box>

    )
}

export default AltBody;