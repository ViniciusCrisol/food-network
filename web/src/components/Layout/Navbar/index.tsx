import React from 'react';
import Link from 'next/link';

import { useAuth } from '../../../hooks/authContext';

import { Container, UserContainer } from './styles';

const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <div>
        <Link href="/">
          <h1>
            <span>food</span> network
          </h1>
        </Link>

        <UserContainer>
          {user ? (
            <h1>{user.name}</h1>
          ) : (
            <>
              <Link href="/auth/login">
                <a>Log in</a>
              </Link>

              <Link href="/auth/signup">
                <a>Sign up</a>
              </Link>
            </>
          )}
        </UserContainer>
      </div>
    </Container>
  );
};

export default Navbar;
