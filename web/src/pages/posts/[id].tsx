import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import api from '../../services/api';

import { Container } from '../../styles/pages/CreatePost';

interface Ipost {
  id: string;
  title: string;
  tagTitle: string;
  authorName: string;
  updated_at: string;
  content: string;
  comments: [];
}

interface IPostProps {
  post: Ipost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>...</h1>;
  }
  console.log(post);

  return (
    <Container>
      <Head>
        <title>Posts - Food Network</title>
      </Head>

      <div>
        <h1>{post.id}</h1>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IPostProps> = async context => {
  const { id } = context.params;

  const response = await api.get(`/posts/${id}`);

  return {
    props: {
      post: response.data,
    },
    revalidate: 6,
  };
};

export default Post;
