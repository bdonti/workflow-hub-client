// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import service1 from "../../assets/services/service-1.jpeg";
import service2 from "../../assets/services/service-2.png";
import service3 from "../../assets/services/service-3.png";
import service4 from "../../assets/services/service-4.jpeg";
import service5 from "../../assets/services/service-5.jpeg";
import service6 from "../../assets/services/service-6.jpeg";
import service7 from "../../assets/services/service-7.jpeg";
import service8 from "../../assets/services/service-8.jpeg";

const Services = () => {
  return (
    <div className="bg-blue-500 flex flex-col justify-center px-20 mb-20 py-20 rounded-xl mx-2 lg:mx-0">
      <div className="space-y-4 pb-12 lg:ml-16">
        <p className="text-sm text-white font-semibold">| Our Services</p>
        <h3 className="text-3xl text-white font-bold">
          Why choose Emphires Services
        </h3>
      </div>
      <div className="lg:ml-16">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={true}
          loop={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service1} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Consulting
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                Leadership Training
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service2} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Leadership
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                HR Management
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service3} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Strategic
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                Compensation Consulting
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service4} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Management
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                HR Consulting
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service5} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Training
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                Strategic Planning
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service6} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Motivation
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                Employee Training
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service7} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Marketing
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                Operational Management
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img className="h-[400px] rounded-xl" src={service8} />
              <div className="absolute bottom-24 lg:bottom-16 left-4 bg-[#FB8CC2] text-white text-[13px] font-bold py-2 px-6 rounded">
                Motivation
              </div>
              <div className="absolute bottom-4 left-4 text-white text-[24px] font-bold p-2 rounded">
                Corporate Program
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
