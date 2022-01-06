import './App.css';
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import CreateProject from './pages/projects/CreateProject';

function App() {

  return (
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/create-project" element={<CreateProject/>}/>

    </Routes>
  );
}

export default App;
