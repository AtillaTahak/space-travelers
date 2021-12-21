import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Missions from './Components/Missions';
import Rockets from './Components/Rockets';
import Dragons from './Components/Dragons';
import MyProfile from './Components/MyProfile';
import Navbar from './Components/Navbar';



function App() {
  return (
      <Router>
      <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Rockets/>} exact/>
          <Route path="/Dragons" element={<Dragons/>}/>
          <Route path="/Missions" element={<Missions />}/>
          <Route path="/MyProfile" element={<MyProfile />}/>
        </Routes>
    </Router>
  );
}

export default App;
