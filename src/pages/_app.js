import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
  <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
  </Head>
   <Component {...pageProps} />
  </>)
}

export default MyApp
