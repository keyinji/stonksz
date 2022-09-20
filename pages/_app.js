import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SessionProvider } from "next-auth/react"
import Script from 'next/script';
import Head from "next/head"
import { AppWrapper } from '../context/state';
import Layout from '../components/layout'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  return(
  <>
  <Head>
    <title>Stonksz</title>
  </Head>
  <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

  <Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
  </Script>
  
  <SessionProvider session={session}>
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  </SessionProvider>
  </>
  )
}

export default MyApp


