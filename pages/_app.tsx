/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
