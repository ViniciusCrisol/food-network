import React from 'react';

import { Container } from './styles';

interface IInputLabel {
  label: string;
}

const InputLabel: React.FC<IInputLabel> = ({ label }) => (
  <Container>{label}</Container>
);

export default InputLabel;
