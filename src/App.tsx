import './App.css';
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import CreateProject from './pages/projects/CreateProject';
import HelpCenter from './pages/support/HelpCenter';

function App() {

  return (
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/create-project" element={<CreateProject/>}/>

      <Route path="/help-center" element={<HelpCenter/>}/>

    </Routes>
  );
}

export default App;
