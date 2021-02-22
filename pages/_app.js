import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';
import Nav from '@/components/Nav';
import 'swiper/swiper-bundle.min.css';
import '@/styles/globals.css';

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
