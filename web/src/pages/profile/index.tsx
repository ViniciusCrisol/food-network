import React from 'react';
import Head from 'next/head';

import { Container } from '../../styles/pages/Profile';
import { GetServerSideProps } from 'next';

interface IPostsData {
  title: string;
  updated_at: string;
}

interface IProfileProps {
  userInformation: {
    name: string;
    created_at: string;
    posts: IPostsData[];
  };
}

const Profile: React.FC<IProfileProps> = ({ userInformation }) => {
  if (!userInformation) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Head>
        <title>{userInformation.name.split(' ')[0]} - Food Network</title>
      </Head>

      <aside>
        <strong>{userInformation.name}</strong>
        <span>{userInformation.created_at}</span>
      </aside>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<IProfileProps> = async () => {
  // const response = await fetch('http://localhost:3333/recommended');
  // const recommendedProducts = await response.json();

  const userInformation = {
    name: 'Vinícin',
    created_at: '2020/10/13',
    posts: [{ title: 'Post', updated_at: '2020/10/11' }],
  };

  return {
    props: {
      userInformation,
    },
  };
};

export default Profile;
