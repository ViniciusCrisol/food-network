import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 3.2em;

  margin-top: 1rem;
  padding: 0 0.5rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};

  font-weight: 700;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.buttonText};

  transition: background 200ms;

  &:hover {
    background: ${({ theme }) => darken(0.07, theme.colors.primary)};
  }
`;
