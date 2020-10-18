import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;

  ul {
    max-width: 840px;
    height: fit-content;

    margin: 0 auto;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-bottom: 0;
    border-top: 0;
  }
`;
