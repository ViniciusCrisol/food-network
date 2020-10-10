import React from 'react';

import Navbar from './Navbar';
import { Container } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);
export default Layout;
