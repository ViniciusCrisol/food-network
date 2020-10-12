import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.nav`
  width: 100%;
  height: 64px;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  background: ${({ theme }) => theme.colors.background};

  position: sticky;
  z-index: 999;
  left: 0;
  top: 0;

  > div {
    height: 100%;
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    align-items: center;

    h1 {
      cursor: pointer;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.text}50;

      span {
        opacity: 0.6;
      }
    }
  }
`;

export const RightContainer = styled.div`
  height: 100%;
  margin-left: auto;

  display: flex;
  align-items: center;

  > a {
    border-radius: 4px;
    padding: 0.5rem 1rem;

    font-weight: 700;
    font-size: 0.875rem;

    transition: background 200ms;
    color: ${({ theme }) => theme.colors.buttonText};

    &:first-child {
      background: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background: ${({ theme }) => darken(0.12, theme.colors.secondary)};
      }
    }

    & + a {
      margin-left: 1rem;
      background: ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) => darken(0.07, theme.colors.primary)};
      }
    }
  }
`;

export const UserContainer = styled.section`
  height: 100%;

  display: flex;
  align-items: center;

  a {
    margin-left: 4px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
