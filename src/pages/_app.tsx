import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '@/modules/PageLayoutModule';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
