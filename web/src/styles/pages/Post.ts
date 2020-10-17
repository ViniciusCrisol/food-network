import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

const status = css`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  span {
    opacity: 0.6;
    font-size: 0.8rem;

    & + span {
      margin-left: 1rem;
    }

    &.tag {
      opacity: 1;
      margin-left: auto;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Content = styled.article`
  width: 100%;
  max-width: 680px;

  padding: 1rem;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    justify-content: space-between;

    h1 {
      margin: 4px 0;
      font-size: 1.5rem;
      font-family: Arial, Helvetica, sans-serif;
    }

    a {
      margin: 4px 0;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      background: ${({ theme }) => theme.colors.primary};

      color: ${({ theme }) => theme.colors.buttonText};
    }
  }

  .header-footer {
    ${status}
  }

  > pre {
    margin-top: 2rem;
    padding: 1rem 4px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const CreateComment = styled(Form)`
  margin-top: 2rem;

  > button {
    width: 100%;
    height: 2rem;
  }
`;

export const Comments = styled.section`
  h2 {
    opacity: 0.6;
    margin: 1rem 0 2rem;

    font-size: 1rem;
    font-weight: normal;
  }
`;

export const Comment = styled.div`
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.02);

  div {
    ${status};
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  pre {
    padding-left: 1rem;
  }
`;
