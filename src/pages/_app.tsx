import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '@/modules/PageLayoutModule';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
