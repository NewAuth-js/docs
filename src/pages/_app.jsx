import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link rel="icon" href="favicon.png" type="png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <Component {...pageProps} />
      </>
  )
}

export default MyApp
