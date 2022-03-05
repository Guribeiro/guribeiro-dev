import { ToastContainer } from 'react-toastify';

import Header from '@/components/Header';
import { EmailProvider } from '@/hooks/email';
import { GithubProvider } from '@/hooks/github';
import { MenuProvider } from '@/hooks/menu';
import { ThemeProvider } from '@/hooks/theme';
import GlobalStyle from '@/styles/global';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gustavo Henrique Ribeiro Dias - Guribeiro.dev</title>
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <MenuProvider>
          <GithubProvider>
            <EmailProvider>
              <Header />
              <Component {...pageProps} />
              <ToastContainer />
            </EmailProvider>
          </GithubProvider>
        </MenuProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
