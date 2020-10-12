import React from 'react';

import Loader from './Loader';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container disabled={loading} {...rest}>
    {loading ? <Loader /> : children}
  </Container>
);

export default Button;
