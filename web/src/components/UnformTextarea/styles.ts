import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  height: 300px;

  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.gray};

  resize: none;

  & + input {
    margin-top: 1rem;
  }
`;
