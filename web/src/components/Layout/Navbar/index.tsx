import React from 'react';
import Link from 'next/link';

import { Container, UserContainer } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link href="/">
          <h1>
            <span>food</span> network
          </h1>
        </Link>

        <UserContainer>
          <Link href="login">
            <a>Log in</a>
          </Link>

          <Link href="signup">
            <a>Sign up</a>
          </Link>
        </UserContainer>
      </div>
    </Container>
  );
};

export default Navbar;
