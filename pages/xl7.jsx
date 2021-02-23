import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import CustomLinkOnBlue from '@/components/CustomLinkOnBlue';
import XlTabs from '@/components/XlTabs';
import XlAccordionSection from '@/components/XlAccordionSection';
import { priceData } from '@/data/data';
import CustomLink from '@/components/CustomLink';

export default function CarPage() {
    return (
        <>
            <NextSeo />
            <main className='pt-32 pb-4 bg-brandGray-200'>
                <section id='overview' className='w-full bg-primary-400 layout'>
                    <Carousel>
                        {[1, 2, 3, 4].map((item) => (
                            <SwiperSlide key={item}>
                                <figure className='bg-brandGray-200'>
                                    <Image
                                        src='/images/carousel/2.jpg'
                                        alt='Carousel Image'
                                        width={375}
                                        height={316}
                                        priority={true}
                                        layout='responsive'
                                        objectFit='cover'
                                    />
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Carousel>
                </section>
                <section className='bg-primary-400'>
                    <article className='py-6 text-center text-white layout'>
                        <figure>
                            <Image
                                src='/images/xl/heading.png'
                                alt='Heading'
                                width={450}
                                height={69}
                                priority={true}
                                layout='responsive'
                            />
                        </figure>
                        <p className='px-4 pb-4 leading-5 border-b border-brandGray-100 border-opacity-30'>
                            Suzuki XL7 hadir dengan tampilan maskulin, tangguh
                            dan berkarakter. Desain modern SUV 7-Seater
                            memberikan kebanggaan dan kepercayaan bagi
                            penggunanya. Dilengkapi dengan fitur canggih semakin
                            membuat XL7 menjadi SUV yang luar biasa di kelasnya
                        </p>
                        <div className='flex justify-center mt-4 space-x-4'>
                            <CustomLinkOnBlue
                                className='px-4 tracking-wide uppercase'
                                href='/xl7'
                            >
                                Unduh Brosur
                            </CustomLinkOnBlue>
                            <CustomLinkOnBlue
                                primary
                                className='px-4 tracking-wide uppercase'
                                href='/xl7'
                            >
                                Harga
                            </CustomLinkOnBlue>
                        </div>
                    </article>
                </section>
                <section id='tipe' className='bg-white'>
                    <article className='py-8 layout'>
                        <XlTabs />
                    </article>
                </section>
                <section id='eksterior' className='bg-primary-400'>
                    <article className='flex flex-col w-full py-8 text-center text-white layout'>
                        <h3 className='mb-4 uppercase'>Eksterior</h3>
                        <figure className=''>
                            <Image
                                src='/images/xl/xl7-eksterior.png'
                                alt='XL 7 Image'
                                width={750}
                                height={1126}
                                layout='responsive'
                            />
                        </figure>
                        <CustomLinkOnBlue
                            className='mx-auto mt-4 w-80'
                            href='/xl7'
                        >
                            Lihat Semua Eksterior
                        </CustomLinkOnBlue>
                    </article>
                </section>
                <section id='interior' className='mt-4 bg-primary-400'>
                    <article className='flex flex-col w-full py-8 text-center text-white layout'>
                        <h3 className='mb-4 text-lg tracking-wide uppercase'>
                            Interior
                        </h3>
                        <figure className=''>
                            <Image
                                src='/images/xl/xl7-interior.png'
                                alt='XL 7 Image'
                                width={750}
                                height={1126}
                                loading='eager'
                                layout='responsive'
                            />
                        </figure>
                        <CustomLinkOnBlue
                            className='mx-auto mt-4 w-80'
                            href='/xl7'
                        >
                            Lihat Semua Interior
                        </CustomLinkOnBlue>
                    </article>
                </section>

                <section id='spesifikasi' className='bg-white'>
                    <article className='py-8 text-center layout'>
                        <h3 className='mb-4 text-lg tracking-wide uppercase'>
                            Spesifikasi
                        </h3>
                        <XlAccordionSection />
                    </article>
                </section>

                <section id='harga' className='mt-4 bg-white'>
                    <article className='flex flex-col py-8 text-center layout'>
                        <h3 className='mb-4 text-lg tracking-wide uppercase'>
                            DAFTAR HARGA
                            <br />
                            XL 7
                        </h3>
                        {priceData.map((data) => (
                            <button className='flex w-full px-8 py-3 mt-4 text-sm text-left border rounded bg-brandGray-200 shadow-brand-bottom'>
                                <p className='w-full px-2 font-semibold'>
                                    {data.title}
                                </p>
                                <p className='w-full px-2 font-semibold'>
                                    {data.price}
                                </p>
                            </button>
                        ))}
                        <CustomLink
                            className='inline-block px-8 mx-auto mt-8'
                            href='/xl7'
                        >
                            Lihat Semua Harga Mobil
                        </CustomLink>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
