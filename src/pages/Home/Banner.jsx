import Lottie from "lottie-react";
import banner1 from "../../assets/banner-1.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-6">
            <div className="space-y-4 px-4 lg:px-0">
              <p className="text-sm text-[#FF78BA]">| Hiring happiness</p>
              <h1 className="text-6xl text-[#353B6E] font-bold lg:w-[550px] mx-auto">
                Hiring the best in the industry.
              </h1>
              <p>Take the mystery out of selecting and developing leaders.</p>
            </div>
            <Lottie animationData={banner1} loop={true} className="h-[700px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
