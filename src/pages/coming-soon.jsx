import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../components/Footer";

function ComingSoon() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
                <Head>
                    <title>Coming Soon™</title>
                    <meta property="og:title" content="Coming Soon™" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="og:description" content="NewAuth is a new better authentication middleware for Node.js."/>
                    <meta property="og:image" content="http://localhost:3000/favicon.png" />
                </Head>
            <div className="container">
                <div className="bg-gray-600 rounded-lg shadow-lg p-5 md:p-20 mx-2">
                    <div className="text-center">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-green-500 sm:text-5xl sm:leading-none md:text-6xl animate-bounce">
                                New<span className="text-blue-400">Auth</span>
                        </h2>
                        <h3 className='text-xl text-white md:text-3xl mt-10'>Coming Soon</h3>
                        <p className="text-md text-white md:text-xl mt-10"><a className="hover:underline" href="https://www.quicktoolz.com">NewAuth</a> is a new better authentication middleware for Node.js.</p>
                    </div>
                    <div className="flex flex-wrap mt-10 justify-center">
                        <div className="m-3">
                            <a href="https://github.com/NewAuth-js/"
                            title="NewAuth's GitHub"
                            className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-black rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'github']} size="xs" />
                            </a>
                        </div>
                        <div className="m-3">
                            <a
                            title="NewAuth's Yarn"
                            className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-blue-400 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'yarn']} size="xs" />
                            </a>
                        </div>
                        <div className="m-3">
                            <a
                            title="NewAuth's NPM"
                            className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-red-600 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'npm']} size="xs" />
                            </a>
                        </div>
                        <div className="m-3">
                         <a href="https://www.reddit.com/user/quicktoolz/"
                            title="NewAuth's Discord"
                            className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-indigo-400 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'discord']} size="xs" />
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https://www.reddit.com/user/quicktoolz/"
                               title="NewAuth's Discord"
                               className="cursor-pointer bg-gray-600 px-5 py-2 inline-block text-white hover:text-indigo-400 rounded md:w-32">
                                <FontAwesomeIcon icon={['fab', 'js']} size="xs" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ComingSoon
