import Lottie from "lottie-react";
import testimonialBanner from "../../assets/testimonials.json";
import { Avatar, Carousel, Rating } from "flowbite-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-20 px-4 lg:px-0">
      <div>
        <Lottie
          animationData={testimonialBanner}
          loop={true}
          className="h-[550px]"
        />
      </div>
      <div>
        <div className="space-y-4">
          <p className="text-sm text-[#FF78BA]">| Testimonials</p>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10">
            What Client's are say about us
          </h3>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel
              leftControl={<FaArrowLeft />}
              rightControl={<FaArrowRight />}
              slideInterval={5000}
            >
              <div>
                <div className="flex justify-between w-full">
                  <Avatar
                    img="https://i.ibb.co/bQC8KZk/foto-sushi-6anudmp-ILw4-unsplash.jpg"
                    alt="avatar"
                    rounded
                  />
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                  </Rating>
                </div>
                <div>
                  <p className="w-[364px] mx-auto my-4 text-[#787C8B] text-[22px]">
                    HR Adviser responded quickly to questions and work with
                    thanks for picking the most expert employee’s for our
                    company. These guys are real best adviser &amp;&nbsp; helped
                    so many times
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#353B6E] text-[18px]">Mark Wains</p>
                  <p className="text-[#787C8B] text-[16px]">Adviser</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between w-full">
                  <Avatar
                    img="https://i.ibb.co/ck9Ckmx/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
                    alt="avatar"
                    rounded
                  />
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                  </Rating>
                </div>
                <div>
                  <p className="w-[364px] mx-auto my-4 text-[#787C8B] text-[22px]">
                    HR Adviser responded quickly to questions and work with
                    thanks for picking the most expert employee’s for our
                    company. These guys are real best adviser &amp;&nbsp; helped
                    so many times
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#353B6E] text-[18px]">Linda Williams</p>
                  <p className="text-[#787C8B] text-[16px]">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between w-full">
                  <Avatar
                    img="https://i.ibb.co/D7RfLSY/brooke-cagle-w-KOKid-NT14w-unsplash.jpg"
                    alt="avatar"
                    rounded
                  />
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                  </Rating>
                </div>
                <div>
                  <p className="w-[364px] mx-auto my-4 text-[#787C8B] text-[22px]">
                    HR Adviser responded quickly to questions and work with
                    thanks for picking the most expert employee’s for our
                    company. These guys are real best adviser &amp;&nbsp; helped
                    so many times
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#353B6E] text-[18px]">Zayed Khan</p>
                  <p className="text-[#787C8B] text-[16px]">Actor</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
