import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;

  padding: 1rem;
  margin: 0 auto;

  aside {
    max-width: 240px;

    padding: 1rem;
    border-radius: 8px 8px 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.gray};

    span {
      opacity: 0.6;
      display: block;
      margin-top: 2px;
      font-size: 0.8rem;
    }
  }
`;
