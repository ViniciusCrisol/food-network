import React from 'react';
import Link from 'next/link';

import { useAuth } from '../../../hooks/authContext';

import { Container, RightContainer, UserContainer } from './styles';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <div>
        <Link href="/">
          <h1>
            <span>food</span> network
          </h1>
        </Link>

        <RightContainer>
          {user ? (
            <UserContainer>
              <span>{user.name.split(' ')[0]}</span>
            </UserContainer>
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
        </RightContainer>
      </div>
    </Container>
  );
};

export default Navbar;
