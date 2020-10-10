import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.nav`
  width: 100%;
  height: 58px;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  position: sticky;
  top: 0;

  > div {
    height: 100%;
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;
    padding: 0 30px;

    display: flex;
    align-items: center;

    h1 {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.text}65;

      span {
        opacity: 0.6;
      }
    }
  }
`;

export const UserContainer = styled.div`
  height: 100%;
  margin-left: auto;

  display: flex;
  align-items: center;

  a {
    padding: 6px 16px;
    border-radius: 4px;

    transition: background 200ms;

    &:first-child {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primary}15;

      &:hover {
        background: ${({ theme }) => theme.colors.primary}25;
      }
    }

    & + a {
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.buttonText};
      background: ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.colors.primary)};
      }
    }
  }
`;
