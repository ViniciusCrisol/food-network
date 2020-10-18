import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';

const toastStyle = css`
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  color: ${({ theme }) => theme.colors.buttonText};
`;

export default styled(ToastContainer)`
  .Toastify__toast--info {
    ${toastStyle};
    background: 'rgb(51, 102, 255)';
  }

  .Toastify__toast--success {
    ${toastStyle};
    background: 'rgb(51, 187, 102)';
  }

  .Toastify__toast--warning {
    ${toastStyle};
    background: ${({ theme }) => theme.colors.secondary};
  }

  .Toastify__toast--error {
    ${toastStyle};
    background: ${({ theme }) => theme.colors.primary};
  }
`;
