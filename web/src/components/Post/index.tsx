import React from 'react';
import Link from 'next/link';

import formatDate from '../../utils/formatDate';

import { Container } from './styles';

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => (
  <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
    <Container>
      <h5>{post.title}</h5>
      <section>
        <span>{post.tagTitle}</span>
        <sub>{formatDate(post.updated_at)}</sub>
      </section>
    </Container>
  </Link>
);

export default Post;
