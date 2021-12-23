import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => (
  <div className="header">
    <div className="container">
      <div className="grid items-center margin-y-xs">
        <div className="col-6 header-left flex items-center gap-sm">
          <img alt="App logo" className="logo" src={logo} />
          <p>Space Travelers&apos; Hub</p>
        </div>
        <div className="col-6 flex justify-end">
          <nav>
            <ul className="flex gap-sm">
              <li>
                <NavLink to="/">Rockets</NavLink>
              </li>
              <li>
                <NavLink to="/Missions">Missions</NavLink>
              </li>
              <li>
                <NavLink to="/Dragons">Dragons</NavLink>
              </li>
              <li>|</li>
              <li>
                <NavLink to="/MyProfile">My Profile</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

export default Navbar;
