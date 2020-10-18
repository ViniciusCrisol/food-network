import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import theme from '../styles/theme';
import toastConfig from '../config/toast';
import GlobalStyles from '../styles/global';

import AppProvider from '../hooks';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer {...toastConfig} />
        </Layout>
      </AppProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
