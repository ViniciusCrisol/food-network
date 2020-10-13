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
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary};

    span {
      opacity: 0.6;
      display: block;
      margin-top: 2px;
      font-size: 0.8rem;
    }

    @media (max-width: 760px) {
      max-width: unset;
      width: 100%;
    }
  }
`;

export const PostsContainer = styled.ul`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
`;

export const Post = styled.li`
  padding: 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray};

  & + li {
    margin-top: 0.5rem;
  }
`;
