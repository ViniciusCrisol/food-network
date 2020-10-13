import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100%;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.gray};
`;

export const Form = styled(Unform)`
  max-width: 680px;
  width: 100%;

  padding: 1rem;
  margin: 0 auto;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};

  font-size: 0.8rem;

  display: flex;
  flex-direction: column;

  > button {
    width: 50%;
    height: 2rem;
  }
`;

export const InputHeader = styled.div`
  padding: 0 4px;
  display: flex;
  flex-direction: column;

  & + input {
    margin-bottom: 0.5rem;
  }

  span {
    opacity: 0.6;
    margin: 2px 0 4px;
  }
`;
