import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100%;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.gray};
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;

  padding: 1rem;
  margin: 0 auto;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 790px) {
    flex-direction: column;
    justify-content: unset;
  }
`;

const container = css`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Form = styled(Unform)`
  ${container}

  width: 100%;
  padding: 1rem;
  max-width: 840px;
  font-size: 0.8rem;

  display: flex;
  flex-direction: column;

  > button {
    width: 50%;
    height: 2rem;
    margin-left: auto;
  }
`;

export const Tips = styled.div`
  ${container}
  display:block;

  padding: 0;
  margin-left: 1rem;
  height: fit-content;

  header {
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.text}80;
    background: ${({ theme }) => theme.colors.gray}bb;
  }

  p {
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 790px) {
    width: 100%;
    margin-top: 1rem;
    margin-left: unset;
  }
`;
