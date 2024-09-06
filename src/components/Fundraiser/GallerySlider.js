import React, { useState } from "react";
// Import Swiper React components
import  { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../assets/images/blog/large/pic1.jpg";
import img2 from "../../assets/images/blog/large/pic2.jpg";
import img3 from "../../assets/images/blog/large/pic3.jpg";
import img4 from "../../assets/images/blog/large/pic4.jpg";
import img5 from "../../assets/images/blog/large/pic5.jpg";
import img6 from "../../assets/images/blog/large/pic6.jpg";

// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([Navigation]);
const swiperFirst = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
];

export default function GallerySlider({ imageData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
     
    
        spaceBetween={10}
        navigation={true} // Arrow tugmalari
        slidesPerView={1} // Bir martada bitta slayd ko'rinadi
        slidesPerGroup={1} // Bir bosishda bitta slayd o'tadi
        loop={true} // Aylanishni o'chirish mumkin
      >
        {/* {swiperFirst.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="dz-media">
              <img
                style={{ height: "330px" }}
                src={imageData.project_image}
                alt="err"
              />
            </div>
          </SwiperSlide>
        ))} */}
        <SwiperSlide >
            <div className="dz-media">
              <img
                style={{ height: "340px", width: "100%" }}
                src={imageData.project_image}
                alt="err"
              />
            </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="dz-media">
            <video style={{ width: "100%", height: "340px" }} controls>
              {imageData.elevator_pitch_video ? (
                <source src={imageData.elevator_pitch_video} type="video/mp4" />
              ) : (
                <p>Video mavjud emas</p> // Fallback holat, agar video yo'q bo'lsa
              )}
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dz-media">
            <video style={{ width: "100%", height: "340px" }} controls>
              {imageData.how_it_works_video ? (
                <source src={imageData.how_it_works_video} type="video/mp4" />
              ) : (
                <p>Video mavjud emas</p> // Fallback holat, agar video yo'q bo'lsa
              )}
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="fundraiser-gallery-thumb"
      >
        {swiperFirst.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="dz-media">
              <img style={{ width: "100%", height: "120px" }} src={imageData.project_image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
