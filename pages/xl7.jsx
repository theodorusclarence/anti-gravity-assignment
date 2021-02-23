import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import CustomLinkOnBlue from '@/components/CustomLinkOnBlue';
import XlTabs from '@/components/XlTabs';

export default function CarPage() {
    return (
        <>
            <NextSeo />
            <main className='pt-16 bg-brandGray-200'>
                <section>
                    <article className='py-2 layout'>
                        <h3 className='text-sm'>XL 7</h3>
                    </article>
                </section>
                <section className='w-full bg-primary-400 layout'>
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
                            <CustomLinkOnBlue className='px-4' href='/xl7'>
                                Unduh Brosur
                            </CustomLinkOnBlue>
                            <CustomLinkOnBlue
                                primary
                                className='px-4'
                                href='/xl7'
                            >
                                Harga
                            </CustomLinkOnBlue>
                        </div>
                    </article>
                </section>
                <section className='bg-white'>
                    <article className='py-8 layout'>
                        <XlTabs />
                    </article>
                </section>
                <section className='bg-primary-400'>
                    <article className='flex flex-col w-full py-8 text-center text-white layout'>
                        <h3 className='mb-4'>Exterior</h3>
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
                <section className='mt-4 bg-primary-400'>
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

                <section className=''>
                    <article className='py-8 text-center layout'>
                        <h3 className='mb-4 text-lg tracking-wide uppercase'>
                            Spesifikasi
                        </h3>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
