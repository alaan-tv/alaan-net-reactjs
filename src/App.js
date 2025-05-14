import './App.css';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import PersonalBranding2 from './Components/Pages/Workshops/PersonalBranding';
import LivingByDesign from './Components/Pages/Services/LivingByDesign';
import SetByDesign from './Components/Pages/Services/SetByDesign';
import ThankYou from './Components/Pages/ThankYou';
import Mosabaqa from './Components/Pages/Mosabaqa';
import Page404 from './Components/Pages/Page404';
import ProfessionalCoaching from './Components/Pages/Services/ProfessionalCoaching';
import LBDTerms from './Components/Common-components/TermsLBD'
import VoiceOver from './Components/Pages/Workshops/VoiceOver';
import JobProgram from './Components/Pages/Workshops/JobProgram';
function App() {
	return (<Router>
			<ScrollToTop/>
			<div className="App">
				<Routes>
					<Route path="/" index element={<Home/>}/>
					<Route path="/our-products" element={<Products/>}/>
					<Route path="/our-workshops" element={<Workshops/>}/>

					<Route path="/our-products/magic-touch-studio" element={<MagicTouchStudio/>}/>
					<Route path="/our-products/magic-touch-clinic" element={<MagicTouchClinic/>}/>
					<Route path="/our-products/own-your-story" element={<OwnYourStory/>}/>

					<Route path="/our-workshops/podcast" element={<Podcast/>}/>
					<Route path="/our-workshops/media" element={<Media/>}/>
					<Route path="/our-workshops/voice-over" element={<VoiceOver/>}/>
					<Route path="/our-workshops/personal-branding" element={<PersonalBranding2/>}/>
					<Route path="/our-workshops/ar" element={<WorkshopsArabic/>}/>

					<Route path="/our-products/be-a-presenter" element={<BeAPresenter/>}/>
					<Route path="/our-products/personal-branding" element={<PersonalBranding/>}/>
					<Route path="/our-products/LBD" element={<LivingByDesign/>}/>
					<Route path="/our-products/SBD" element={<SetByDesign/>}/>
					<Route path="/our-products/personal-coaching" element={<ProfessionalCoaching/>}/>


					<Route path="/:parent/:child/thank-you" element={<ThankYou/>}/>

					<Route path="/terms" element={<Terms/>}/>
					<Route path="/lbd-terms" element={<LBDTerms/>}/>
					<Route path="/ar" element={<AR/>}></Route>

					<Route path="*" element={<Page404/>} />
					<Route path="/our-workshops/media-training-program" element={<JobProgram/>}/>

					<Route path="/mosabaqa" element={<Mosabaqa/>}/>

				</Routes>
			</div>
		</Router>
	);
}

export default App;
