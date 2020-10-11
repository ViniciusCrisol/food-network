import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <main style={{ marginBottom: 48, height: 'calc(100% - 112px)' }}>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
