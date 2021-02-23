import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import CarTabs from '@/components/CarTabs';
import UnstyledLink from '@/components/UnstyledLink';

export default function outlet() {
    return (
        <>
            <NextSeo />
            <main className='pt-12 bg-brandGray-200'>
                <section className='w-full bg-primary-400 layout'>
                    <Carousel>
                        {[1, 2, 3, 4].map((item) => (
                            <SwiperSlide key={item}>
                                <figure className='bg-brandGray-200'>
                                    <Image
                                        src='/images/carousel/1.jpg'
                                        alt='Carousel Image'
                                        width={750}
                                        height={755}
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
                        <h1 className='text-lg font-semibold'>
                            Temukan Mobil Suzuki yang tepat untuk Anda
                        </h1>
                    </article>
                    <div className='w-full layout'>
                        <CarTabs />
                    </div>
                </section>

                <section className='bg-white'>
                    <article className='w-full py-6 layout'>
                        <UnstyledLink href='/outlet'>
                            <figure className='bg-brandGray-200'>
                                <Image
                                    src='/images/outlet/1.png'
                                    alt='Outlet Image'
                                    width={750}
                                    height={536}
                                    priority={true}
                                    layout='responsive'
                                    objectFit='cover'
                                />
                            </figure>
                        </UnstyledLink>
                        <UnstyledLink href='/outlet'>
                            <figure className='bg-brandGray-200'>
                                <Image
                                    src='/images/outlet/2.png'
                                    alt='Outlet Image'
                                    width={750}
                                    height={536}
                                    priority={true}
                                    layout='responsive'
                                    objectFit='cover'
                                />
                            </figure>
                        </UnstyledLink>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
