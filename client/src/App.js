
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.js'
import Home from './components/Home.js';
import Header from './components/Header';
import Services from './components/Services';
import Auth from './components/Auth.js';
// if you delete the <Route path='/' exact element={<Home/>}/> it works, so something isnt right with that
// FIXED I THINK imports in the Home component were incorrect, the fragment I used instead of a div was causing the incorrect error to show up for some reason

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path = '/about' exact element={<About/>}/>
                <Route path='/services' exact element={<Services/>}/>
                <Route path='/auth' exact element={<Auth />}/>
            </Routes>
          
        </BrowserRouter>
    </div>
  );
}

export default App;
