import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container {...rest}>{loading ? <h1>...</h1> : children}</Container>
);

export default Button;
