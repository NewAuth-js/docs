import '../tailwind.css'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import * as Sentry from '@sentry/node';

library.add(fab)

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        enabled: process.env.NODE_ENV === 'production',
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
    });
}

function MyApp({ Component, pageProps, err }) {
  return (
      <>
        <Head>
          <link rel="icon" href="favicon.png" type="png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
          <Component {...pageProps} err={err} />
      </>
  )
}

export default MyApp
