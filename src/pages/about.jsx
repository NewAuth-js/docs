import Head from 'next/head'
import useTranslation from "next-translate/useTranslation";


function About() {
    const {t} = useTranslation('index')

    return<div>
        <Head>
            <title>NewAuth About</title>
            <meta property="og:title" content="NewAuth About" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="og:description" content="NewAuth is a new better authentication middleware for Node.js."/>
            <meta property="og:image" content="http://localhost:3000/favicon.png" />
        </Head>
        <body>
        <h1>{t('title')}</h1>
        </body>
    </div>
}

export default About
