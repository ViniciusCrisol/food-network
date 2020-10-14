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
      <sub>{formatDate(post.updated_at)}</sub>
    </section>
  </Container>
);

export default Post;
