import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Auth';

const Profile: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Sign Up - Food Network</title>
      </Head>

      <h1>Profile</h1>
    </Container>
  );
};

export default Profile;
