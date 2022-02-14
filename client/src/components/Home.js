import Footer from './Footer';
import BodyRight from './BodyRight';
import BodyLeft from './BodyLeft';
import Box from '@mui/material/Box';

function Home(){
    return(
        <div>
        <Box
        sx={{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "space-evenly",
          paddingTop: '20px',
        }}>
          <BodyLeft />
          <BodyRight />
        </Box>
        <Footer />
        </div>
    )
}
export default Home;