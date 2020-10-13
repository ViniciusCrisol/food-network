import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100%;

  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.gray};
`;

export const Form = styled(Unform)`
  max-width: 480px;

  padding: 2rem;
  margin: 0 auto;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  h2 {
    margin: 1rem 4px;
    font-weight: 500;
  }

  a {
    text-align: right;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
