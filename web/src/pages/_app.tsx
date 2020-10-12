import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import AppProvider from '../hooks';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
