import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export default function Carousel({ children }) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {children}
        </Swiper>
    );
}
