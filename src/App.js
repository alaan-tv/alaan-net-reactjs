import './App.css';
import   Home  from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workshops from './Components/Pages/Workshops';
import MagicTouchStudio from './Components/Pages/Services/MagicTouchStudio';
import MagicTouchClinic from './Components/Pages/Services/MagicTouchClinic';
import OwnYourStory from './Components/Pages/Services/OwnYourStory';
import AR from './Components/Pages/AR';
import Podcast from './Components/Pages/Workshops/Podcast';
import Media from './Components/Pages/Workshops/Media';
import ScrollToTop from './Components/Pages/ScrollToTop';
import WorkshopsArabic from './Components/Pages/WorkshopsArabic'
import BeAPresenter from './Components/Pages/Services/BeAPresenter';
import Terms from './Components/Common-components/Terms';
import PersonalBranding from './Components/Pages/Services/PersonalBranding';
import LivingByDesign from './Components/Pages/Services/LivingByDesign';
import ContentByDesign from './Components/Pages/Services/ContectByDesign';
import ThankYou from './Components/Common-components/ThankYou';

function App() {
  
  return (
    <Router>
         

       <ScrollToTop />
    <div className="App">
    
    
    
    <Routes>
    <Route path="/" index element={<Home />}  />
    <Route path="/our-services" element={<Services />}  />
    <Route path="/our-workshops" element={<Workshops />}  />
    <Route path="/our-services/magic-touch-studio" element={<MagicTouchStudio />}  />
    <Route path="/our-services/magic-touch-clinic" element={<MagicTouchClinic />}  />
    <Route path="/our-services/own-your-story" element={<OwnYourStory />}  />
    <Route path="/our-workshops/podcast" element={<Podcast />}  />
    <Route path="/our-workshops/media" element={<Media />}  />
    <Route path="/our-workshops/ar" element={<WorkshopsArabic />}  />
    <Route path="/our-services/be-a-presenter" element={<BeAPresenter />}  />
    <Route path="/our-services/personal-branding" element={<PersonalBranding />}  />
    <Route path="/our-services/LBD" element={<LivingByDesign />}  />
    <Route path="/our-services/CBD" element={<ContentByDesign />}  />
    <Route path="/thank-you" element={<ThankYou />}  />
    <Route path="/terms" element={<Terms />}  />





    <Route path="/ar" element={<AR/>}></Route>

    </Routes>


    
    </div>
    </Router>
    
  );
}

export default App;
