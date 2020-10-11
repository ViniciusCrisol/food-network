import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Bannner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 420px;

  padding: 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    font-family: 'Roboto Slab', serif;
  }

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
