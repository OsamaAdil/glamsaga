import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import style from "./carousel.module.css";
// import img from "/image1.jpg";

export default function Carousel() {
  return (
    <Swiper
      className={style.container}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}"></span>`,
      }}
      loop={true}
      autoplay={{ delay: 3000 }}
      speed={1000}
      effect="slide"
      grabCursor={true}
      resistanceRatio={0.5}
      swiper-button= "true"
    >
      <SwiperSlide>
        <img src={"image1.jpg"} alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"image2.jpg"} alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"image3.jpg"} alt="slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}
