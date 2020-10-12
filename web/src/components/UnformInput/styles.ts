import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 3.2em;

  padding: 0 0.5rem;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.gray};

  & + input {
    margin-top: 1rem;
  }
`;
