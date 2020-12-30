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
        <meta name="description" content="a list of countries and information about them their population, area , happiness index neighbouring countries, region and subregion" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="msapplication-TitleImage" content="/images/icons/icon-192x192.png" />
        <meta property='og:type' content='website' />
        <meta property='og:description' content="a list of countries and information about them their population, area , happiness index neighbouring countries, region and subregion" />
        <meta property='og:site_name' content='World Country Rank Checker' />
        <meta property='og:url' content='https://nextjs-country-rank.vercel.app/' />
        <meta property='og:image' content='https://nextjs-country-rank.vercel.app/images/icons/apple-touch-icon.png' />

  </Head>
   <Component {...pageProps} />
  </>)
}

export default MyApp
