import React from 'react';
import Admin from '../../layouts/Admin';
import AdminNavbarLinks from '../../componentsAdmin/Navbars/AdminNavbarLinks';
import Footer from '../../componentsAdmin/Footer/Footer';
import Sidebar from '../../componentsAdmin/Sidebar/Sidebar';
import JALandingPage from '../JALandingPage/JALandingPage';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <JALandingPage />
    </div>
  </div>
);

export default AboutPage;
