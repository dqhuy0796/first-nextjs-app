import bannerBg1 from '@/assets/images/carousel-1.jpg';
import bannerBg2 from '@/assets/images/carousel-2.jpg';
import Image from 'next/image';
import { useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SwiperBanner.module.css';

SwiperCore.use([Navigation]);

function SwiperBanner() {
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);

    return (
        <div className={styles.container}>
            <Swiper
                loop={true}
                autoplay={true}
                navigation={{
                    prevEl: swiperPrevRef.current ? swiperPrevRef.current : undefined,
                    nextEl: swiperNextRef.current ? swiperNextRef.current : undefined,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNextRef.current;
                }}
            >
                <SwiperSlide>
                    <div className={styles.banner}>
                        <Image src={bannerBg1} alt={'banner background 1'} placeholder={"blur"}/>
                        <div className={styles.content}>
                            <h3>we have been serving</h3>
                            <h1>Coffee</h1>
                            <h2>* since 1950 *</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.banner}>
                        <Image src={bannerBg2} alt={'banner background 2'} placeholder={"blur"}/>
                        <div className={styles.content}>
                            <h3>we have been serving</h3>
                            <h1>Coffee</h1>
                            <h2>* since 1950 *</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <button ref={swiperPrevRef} className={`${styles.navigation} ${styles.prev}`}>
                    <BsChevronCompactLeft />
                </button>
                <button ref={swiperNextRef} className={`${styles.navigation} ${styles.next}`}>
                    <BsChevronCompactRight />
                </button>
            </Swiper>
        </div>
    );
}

export default SwiperBanner;
