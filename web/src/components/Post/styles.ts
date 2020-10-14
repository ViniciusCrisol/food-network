import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;

  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
`;
