import "./AlbumPhoto.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_image_1 from '../../assets/1.jpg';
import slide_image_2 from '../../assets/2.jpg';
import slide_image_3 from '../../assets/3.jpg';
import slide_image_4 from '../../assets/4.jpg';
import slide_image_5 from '../../assets/5.jpg';
import slide_image_6 from '../../assets/6.jpg';
import slide_image_7 from '../../assets/7.jpg';
import slide_image_8 from '../../assets/10.jpg';
import slide_image_9 from '../../assets/11.jpg';
import slide_image_10 from '../../assets/12.jpg';
import slide_image_11 from '../../assets/13.jpg';
export default function AlbumPhoto() {
  return (
    <div className="album-photo">
      <div className="container-album">
        <h1 className="heading">Album ảnh cưới</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_8} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_10} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_11} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
