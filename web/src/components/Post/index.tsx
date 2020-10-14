import React from 'react';

import formatDate from '../../utils/formatDate';

import { Container } from './styles';

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => (
  <Container>
    <h5>{post.title}</h5>
    <section>
      <span>{post.tagTitle}</span>
      <strong>{formatDate(post.updated_at)}</strong>
    </section>
  </Container>
);

export default Post;
