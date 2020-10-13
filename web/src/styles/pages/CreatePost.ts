import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  max-width: 680px;
  width: 100%;

  padding: 1rem;
  margin: 0 auto;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  > button {
    width: 50%;
    height: 2rem;

    font-size: 0.8rem;
  }
`;

export const InputHeader = styled.div`
  padding: 0 4px;
  flex-direction: column;
  display: flex;

  & + input {
    margin-bottom: 0.5rem;
  }

  span {
    opacity: 0.6;
    margin: 2px 0;
    font-size: 0.6rem;
  }

  strong {
    font-size: 0.8rem;
  }
`;
