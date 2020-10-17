import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.article`
  width: 100%;
  max-width: 680px;

  padding: 1rem;
  margin: 0 auto;

  header {
    display: flex;
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
  }

  pre {
    margin-top: 2rem;
    padding: 1rem 4px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;
