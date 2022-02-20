import Footer from './Footer';

import AltBody from './AltBody';

import "react-alice-carousel/lib/alice-carousel.css";

function Home(){
    return(
        <>
        <AltBody />
        <Footer />
        </>
        
    )
}
export default Home;
// sx={{
//   display: "flex",
//   flexDirection: 'row',
//   justifyContent: "space-evenly",
//   paddingTop: '20px',
//   paddingBottom: '25px'
// }}>
//   <BodyLeft />
//   <BodyRight />
// </Box>
// <Box sx={{
//   justifyContent: "left"
// }}>
//   <Typography color={'secondary'}
//   sx={{
//     fontStyle: 'italic',
//     paddingBottom: '10px'
//   }}>
//     "Best lawncare service in the Reno/Carson area"
//   </Typography>

{/* <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls>
            <img src={image1} alt= 'Freshly Cut Grass'height={'300px'}/>
            <img src={image2} alt= 'Freshly Cut Grass'height={'300px'}/>
            <img src={image3} alt= 'Freshly Cut Grass'height={'300px'}/>
            <img src={image4} alt= 'Freshly Cut Grass'height={'300px'}/>
          </AliceCarousel> */}