import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import api from '../../services/api';

import Post from '../../components/Post';
import { Container } from '../../styles/pages/Posts';

interface IPosts {
  posts: IPost[];
}

const Posts: React.FC<IPosts> = ({ posts }) => {
  console.log(posts);

  return (
    <Container>
      <Head>
        <title>Posts - Food Network</title>
      </Head>

      <ul>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<IPosts> = async context => {
  const response = await api.get('/posts');

  return {
    props: {
      posts: response.data,
    },
    revalidate: 60,
  };
};

export default Posts;
