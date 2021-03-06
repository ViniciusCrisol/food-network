import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.li`
  width: 100%;

  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-right: 0;
  border-left: 0;

  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background: ${darken(0.02, '#fff')};
  }

  h5 {
    font-size: 1rem;

    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
    text-overflow: ellipsis;
  }

  section {
    margin-top: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      padding: 4px 6px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primary};

      color: ${({ theme }) => theme.colors.buttonText};
    }
  }
`;
