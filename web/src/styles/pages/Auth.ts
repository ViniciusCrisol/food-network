import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100%;

  padding: 2rem 1rem;
  background: #eff0f1;
`;

export const Form = styled(Unform)`
  margin: 0 auto;
  max-width: 420px;

  display: flex;
  flex-direction: column;
`;
