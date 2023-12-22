import './App.css';
import   Home  from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workshops from './Components/Pages/Workshops';
import MagicTouchStudio from './Components/Pages/Services/MagicTouchStudio';
import MagicTouchClinic from './Components/Pages/Services/MagicTouchClinic';
import OwnYourStory from './Components/Pages/Services/OwnYourStory';


function App() {
  return (
    <Router>
    <div className="App">
    
    
    
    <Routes>
    <Route path="/" index element={<Home />}  />
    <Route path="/our-services" element={<Services />}  />
    <Route path="/our-workshops" element={<Workshops />}  />
    <Route path="/our-services/magic-touch-studio" element={<MagicTouchStudio />}  />
    <Route path="/our-services/magic-touch-clinic" element={<MagicTouchClinic />}  />
    <Route path="/our-services/own-your-story" element={<OwnYourStory />}  />

    </Routes>


    
    </div>
    </Router>
  );
}

export default App;
