import './App.css';
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import CreateProject from './pages/projects/CreateProject';
import HelpCenter from './pages/support/HelpCenter';
import Projects from './pages/projects/Projects';
import AboutUs from './pages/support/AboutUs';

function App() {

  return (
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/projects" element={<Projects/>}/>

      <Route path="/create-project" element={<CreateProject/>}/>

      <Route path="/help-center" element={<HelpCenter/>}/>

      <Route path="/about-us" element={<AboutUs/>}/>

    </Routes>
  );
}

export default App;
