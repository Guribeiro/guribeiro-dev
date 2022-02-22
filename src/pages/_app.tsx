import Header from '@/components/Header';
import { MenuProvider } from '@/hooks/menu';
import { ThemeProvider } from '@/hooks/theme';
import GlobalStyle from '@/styles/global';
import { AppProps } from 'next/app';
import Head from 'next/head';

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
          <Header />
          <Component {...pageProps} />
        </MenuProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
