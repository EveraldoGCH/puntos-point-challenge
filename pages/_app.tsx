import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Script from 'next/script';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Challenge Everaldo Guevara</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
            />
          </Head>
          <Script async src={"https://www.googletagmanager.com/gtag/js?id=GTM-MPG3M856"} />
          <Script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("config", "GTM-MPG3M856", {
                page_path:window.location.pathname,
              })
              `,
            }
            }
            strategy="afterInteractive"
          />
          <Header />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
