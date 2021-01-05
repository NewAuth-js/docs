import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Sidebar from '../components/Sidebar';

function Index() {
    const {t} = useTranslation('index')

    return <>
        <Sidebar />
    </>
}
export default Index
