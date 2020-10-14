import React from 'react';

import { Container } from './styles';

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => (
  <Container>
    <h1>{post.title}</h1>
  </Container>
);

export default Post;
