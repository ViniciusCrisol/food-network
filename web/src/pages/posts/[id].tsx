import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import { Container, Content } from '../../styles/pages/Post';

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
  return (
    <Container>
      <Head>
        <title>{post.title} - Food Network</title>
      </Head>

      <Content>
        <header>
          <h1>{post.title}</h1>

          <Link href="/posts/create">
            <a>Create a post</a>
          </Link>
        </header>
        <div className="header-footer">
          <span>
            Created by <strong>{post.authorName}</strong>
          </span>
          <span>
            Last update <strong>{formatDate(post.updated_at)}</strong>
          </span>
          <span className="tag">
            <strong>{post.tagTitle}</strong>
          </span>
        </div>

        <pre>{post.content}</pre>
      </Content>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/posts');

  const paths = response.data.map((post: Ipost) => ({
    params: { id: post.id },
  }));

  return {
    paths,
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
