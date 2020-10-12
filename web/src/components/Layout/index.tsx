import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import Content from './styles';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
