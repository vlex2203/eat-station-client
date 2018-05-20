import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <div className="section no-pad-bot" id="index-banner">
    <div className="overlay"></div>
    <div className="container">
      <br />
      <h1 className="header center white-text">Eat-Station</h1>
      <div className="row center">
        <h5 className="header col s12 light white-text">Find best restaurants</h5>
      </div>
      <div className="row center">
        <NavLink to="/restaurants" className="btn-large waves-effect waves-light orange">Show restaurants</NavLink>
      </div>
      <br />
    </div>
  </div>
);

export default Home;