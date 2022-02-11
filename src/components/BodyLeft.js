import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TypeWriter from './TypeWriter';
function BodyLeft(){
    return(
        <Box
        sx={{
            borderRight: "thick double #32a1ce;",
            paddingTop: "50px",
            paddingRight: "20px"
        }}>
            <Typography
             variant="h3">
                Quality Guarantee! 
                <span role="img" aria-label="thumbsup"> 👍 </span>
            </Typography>
            <TypeWriter />
        </Box>
    )
}

export default BodyLeft;