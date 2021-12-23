import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import Missions from './Components/missionpage/missionPage';
import Rockets from './Components/Rockets';
import Dragons from './Components/Dragons';
import MyProfile from './Components/MyProfile';
import Navbar from './Components/Navbar';
import MissionPage from './Components/missionpage/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} exact />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Mission" element={<MissionPage />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
