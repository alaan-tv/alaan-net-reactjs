import './App.css';
import   Home  from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workshops from './Components/Pages/Workshops';
import MagicTouchStudio from './Components/Pages/Services/MagicTouchStudio';


function App() {
  return (
    <Router>
    <div className="App">
    
    
    
    <Routes>
    <Route path="/" index element={<Home />}  />
    <Route path="/our-services" element={<Services />}  />
    <Route path="/our-workshops" element={<Workshops />}  />
    <Route path="/our-services/magic-touch-studio" element={<MagicTouchStudio />}  />
    </Routes>


    
    </div>
    </Router>
  );
}

export default App;
