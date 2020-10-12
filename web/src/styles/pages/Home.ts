import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  text-align: center;

  h1 {
    line-height: 1;
    font-size: 3rem;
    font-family: 'Roboto Slab', serif;
  }

  .separator {
    height: 6px;
    width: 60px;

    margin: 2rem 0;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Bannner = styled.div`
  width: 100%;
  height: calc(100vh - 48px);

  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    max-width: 450px;
    margin-top: 1rem;

    font-weight: 600;
    font-size: 1.25rem;
  }

  div {
    margin-top: 3rem;

    a {
      font-weight: 600;
      background: white;
      border-radius: 4px;
      padding: 0.5rem 1rem;

      & + a {
        margin-left: 1rem;
      }
    }
  }
`;

export const Content = styled.section`
  height: 100vh;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 3rem;
    font-size: 2.2rem;
  }

  p {
    max-width: 520px;
    margin: 0 auto;

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Card = styled.div`
  max-width: 520px;
  width: 100%;

  padding: 1rem;
  border-radius: 8px;
  margin: 2.5rem auto;
  box-shadow: rgba(0, 0, 0, 0.32) 0px 2px 8px;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    font-family: 'Roboto Slab', serif;
  }

  p {
    margin-top: 1rem;
    max-width: 350px;

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > a {
    margin-top: 1.5rem;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.buttonText};
    transition: background 200ms;

    &:hover {
      background: ${({ theme }) => darken(0.07, theme.colors.primary)};
    }
  }
`;
