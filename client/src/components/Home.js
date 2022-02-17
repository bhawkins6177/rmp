import Footer from './Footer';
import BodyRight from './BodyRight';
import BodyLeft from './BodyLeft';
import Box from '@mui/material/Box';
import './styles.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/img1.jpeg';
import image2 from './img/img2.jpeg';
import image3 from './img/img3.jpeg';
import image4 from './img/img4.jpeg';// maybe do this with Mui instead
function Home(){
    return(
        <div>
        <Box
        sx={{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "space-evenly",
          paddingTop: '20px',
          paddingBottom: '50px'
        }}>
          <BodyLeft />
          <BodyRight />
        </Box>
        <Box sx={{
          justifyContent: "left"
        }}>
          <AliceCarousel autoPlay autoPlayInterval="2000" disableButtonsControls>
            <img src={image1} alt= 'Freshly Cut Grass'className="sliderimg"/>
            <img src={image2} alt= 'Freshly Cut Grass'className="sliderimg"/>
            <img src={image3} alt= 'Freshly Cut Grass'className="sliderimg"/>
            <img src={image4} alt= 'Freshly Cut Grass'className="sliderimg"/>
          </AliceCarousel>
        </Box>
        
        <Footer />
        </div>
    )
}
export default Home;