import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export default function outlet() {
    return (
        <>
            <NextSeo />
            <main className='pt-12 bg-brandGray-200'>
                <section className='w-full bg-primary-400 layout'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img
                                src='/images/carousel/1.jpg'
                                alt='Carousel Image'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src='/images/carousel/1.jpg'
                                alt='Carousel Image'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src='/images/carousel/1.jpg'
                                alt='Carousel Image'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src='/images/carousel/1.jpg'
                                alt='Carousel Image'
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className='bg-primary-400'>
                    <article className='px-6 py-8 text-center text-white layout'>
                        <h1 className='text-lg font-semibold'>
                            Temukan Mobil Suzuki yang tepat untuk Anda
                        </h1>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
