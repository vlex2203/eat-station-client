import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './Layout.css';

const Layout = props =>(
  <div className="container-fluid">
    <Header />
      <main className="main">
      {props.children}
      </main>
    <Footer />
  </div>
);

export default Layout;
