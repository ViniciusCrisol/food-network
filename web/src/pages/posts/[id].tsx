import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormHandles } from '@unform/core';
import { GetStaticPaths, GetStaticProps } from 'next';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';
import { useAuth } from '../../hooks/authContext';

import Button from '../../components/Button';
import InputLabel from '../../components/InputLabel';
import Textarea from '../../components/UnformTextarea';
import {
  Container,
  Content,
  Comment,
  Comments,
  CreateComment,
} from '../../styles/pages/Post';

interface IComment {
  id: string;
  authorName: string;
  content: string;
  updated_at: string;
}

interface Ipost {
  id: string;
  title: string;
  tagTitle: string;
  authorName: string;
  updated_at: string;
  content: string;
  comments: IComment[];
}

interface IPostProps {
  post: Ipost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();
  const { user } = useAuth();

  const handleCreateComment = useCallback(
    async ({ content }) => {
      setLoading(true);
      try {
        if (!user) router.push('/auth/login');

        if (!content) console.log('Your comment must have a content!');

        const postId = router.asPath.split('posts/')[1];

        await api.post(`/comments/${postId}`, { content });
        router.push('/posts');
      } catch (err) {
        setLoading(false);
        console.log(err.response.data.message);
      }
    },
    [user, router]
  );

  return (
    <Container>
      <Head>
        <title>{post.title} - Food Network</title>
      </Head>

      <Content>
        <div className="comment">
          <header>
            <h1>{post.title}</h1>

            <Link href={user ? '/posts/create' : '/auth/login'}>
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
        </div>

        <Comments>
          <h2>{post.comments.length} comments</h2>
          {post.comments.map(comment => (
            <Comment key={comment.id}>
              <div>
                <span>
                  Created by <strong>{comment.authorName}</strong>
                </span>
                <span>
                  Last update <strong>{formatDate(comment.updated_at)}</strong>
                </span>
              </div>
              <pre>{comment.content}</pre>
            </Comment>
          ))}
        </Comments>

        <CreateComment ref={formRef} onSubmit={handleCreateComment}>
          <InputLabel label="Comment content" />
          <Textarea name="content" />

          <Button loading={loading}>Comment</Button>
        </CreateComment>
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
