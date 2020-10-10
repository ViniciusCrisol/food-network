import styled from 'styled-components';

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
