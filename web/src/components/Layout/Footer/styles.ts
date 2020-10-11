import styled from 'styled-components';

interface IFooter {
  isOpen: boolean;
}

export const Container = styled.footer<IFooter>`
  width: 100%;
  height: 48px;

  color: white;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.text};

  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.8rem;

    a {
      color: white;
      text-decoration: none;
    }
  }

  button {
    width: 1.4rem;
    height: 1.4rem;
    margin-left: 2rem;

    color: white;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
