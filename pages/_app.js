import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import '@/styles/globals.css';
import Nav from '@/components/Nav';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Nav>
            <Component {...pageProps} />
            </Nav>
        </>
    );
}

export default MyApp;
