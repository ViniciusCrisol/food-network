import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 0;

  ul {
    max-width: 840px;
    height: fit-content;

    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-top: 0;
    border-bottom: 0;
    margin: 0 auto;
  }
`;
