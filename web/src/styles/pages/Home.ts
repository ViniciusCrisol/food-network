import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;

  h1 {
    font-size: 3rem;
    font-family: 'Roboto Slab', serif;
  }

  .separator {
    height: 6px;
    max-width: 60px;

    margin: 2rem auto;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Bannner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 420px;

  padding: 1rem;
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
  padding: 1rem;

  > h1 {
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
