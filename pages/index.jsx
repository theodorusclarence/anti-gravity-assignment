import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Home() {
    return (
        <>
            <NextSeo />
            {/* <Nav> */}
            <main className='pt-12 bg-brandGray-200'>
                <section className='bg-primary-400'>
                    <article className='px-6 pt-12 text-center text-white pb-36 layout'>
                        <h1 className='text-lg font-bold'>
                            Temukan Outlet Suzuki terdekat di daerah sekitar
                            Anda
                        </h1>
                    </article>
                </section>
                <section className='pb-12'>
                    <article className='-mt-28 layout'>
                        <CardList type='outlet' />
                    </article>
                </section>
                <section className='bg-primary-400'>
                    <article className='px-6 pt-12 text-center text-white pb-36 layout'>
                        <h1 className='text-lg font-bold'>Informasi Terbaru</h1>
                        <p>Seputar Promo, Berita, Event dari Suzuki</p>
                    </article>
                </section>
                <section className='pb-12'>
                    <article className='-mt-28 layout'>
                        <CardList type='info' />
                        <div className='flex items-center'>
                            <CustomLink
                                href='#'
                                className='inline-block px-12 mx-auto mt-8'
                            >
                                Lihat Semua Informasi
                            </CustomLink>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
            {/* </Nav> */}
        </>
    );
}
