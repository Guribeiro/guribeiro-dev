import { AppProps } from 'next/app';

import Header from '../components/Header';
import { MenuProvider } from '../hooks/menu';
import { GlobalStyle } from '../styles/global';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MenuProvider>
        <Header />
        <Component {...pageProps} />
      </MenuProvider>
    </>
  );
}

export default MyApp;
