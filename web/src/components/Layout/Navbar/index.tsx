import React from 'react';

import { Container, UserContainer } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          <span>food</span> network
        </h1>
        <UserContainer>
          <a>Log in</a>
          <a>Sign up</a>
        </UserContainer>
      </div>
    </Container>
  );
};

export default Navbar;
