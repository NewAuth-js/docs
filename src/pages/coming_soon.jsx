import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../components/Footer";
import 'tailwindcss/tailwind.css';
import useTranslation from "next-translate/useTranslation";

function Coming_soon() {
    const {t} = useTranslation('coming_soon')

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
                <Head>
                    <title>{t('meta_title')}</title>
                    <meta property="og:title" content={t('meta_title')} />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="og:description" content={t('meta_description')}/>
                    <meta property="og:image" content="http://localhost:3000/favicon.png" />
                </Head>
            <div className="container">
                <div className="bg-gray-600 rounded-lg shadow-lg p-5 md:p-20 mx-2">
                    <div className="text-center">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-green-500 sm:text-5xl sm:leading-none md:text-6xl animate-bounce">
                                New<span className="text-blue-400">Auth</span>
                        </h2>
                        <h2 className='text-xl text-white md:text-3xl mt-10'>{t('subtitle')}</h2>
                        <p className="text-md text-white md:text-xl mt-10"><a className="hover:underline" href={process.env.HOST}>NewAuth</a>{t('description')}</p>
                    </div>
                    <div className="flex flex-wrap mt-10 justify-center">
                        <button className="m-3">
                            <a href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                            title={t('github')}
                            className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-black rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'github']} tabIndex="0" aria-label={t('github')} />
                            </a>
                        </button>
                        <button className="m-3">
                            <a  href={process.env.NEXT_PUBLIC_YARN_LINK}
                                title={t('yarn')}
                                className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-blue-400 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'yarn']} tabIndex="0" aria-label={t('coming_soon.yarn')} />
                            </a>
                        </button>
                        <button className="m-3" tabIndex="0">
                            <a  href={process.env.NEXT_PUBLIC_NPM_LINK}
                                title={t('npm')}
                                className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-red-600 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'npm']} tabIndex="0" aria-label={t('coming_soon.npm')} />
                            </a>
                        </button>
                        <button className="m-3">
                             <a href={process.env.NEXT_PUBLIC_DISCORD_LINK}
                                title={t('discord')}
                                className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-indigo-400 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'discord']} tabIndex="0" aria-label={t('coming_soon.discord')} />
                            </a>
                        </button>
                        <button className="m-3">
                            <a href={process.env.NEXT_PUBLIC_CDNJS_LINK}
                               title={t('cdnjs')}
                               className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-yellow-400 rounded md:w-32">
                               <FontAwesomeIcon icon={['fab', 'js']} tabIndex="0" aria-label={t('discord')} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}
export default Coming_soon
