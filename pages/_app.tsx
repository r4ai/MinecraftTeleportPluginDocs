/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { Silkscreen, DotGothic16 } from 'next/font/google';
import Head from 'next/head';
import '../styles/global.css';

const silkscreen = Silkscreen({
  weight: ['400'],
  subsets: ['latin'],
});
const dotGothic16 = DotGothic16({
  weight: ['400'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --font-silkscreen: ${silkscreen.style.fontFamily};
            --font-dotgothic16: ${dotGothic16.style.fontFamily};
          }
        `}
      </style>
    </div>
  </>
);

export default App;
