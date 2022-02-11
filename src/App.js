
import './App.css';
import Footer from './components/Footer';
import BodyRight from './components/BodyRight';
import BodyLeft from './components/BodyLeft';
import Header from './components/Header';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Header />
        <Box
        sx={{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "space-evenly"
        }}>
          <BodyLeft />
          <BodyRight />
        </Box>
        <Footer />
      
    </div>
  );
}

export default App;
