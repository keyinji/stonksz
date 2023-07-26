import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Layout from "../components/Layout";
import NProgress from "nprogress"; //nprogress module //styles of nprogress
import Router from 'next/router';
import "../styles/nprogress.css"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <>
      <Head>
        <title>Stonksz</title>
      </Head>
        <Layout>
          <Component{...pageProps} />
        </Layout>
    </>
  );
}

export default MyApp;
