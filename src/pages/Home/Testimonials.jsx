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
                    WorkFlow Hub has transformed our HR processes with their
                    exceptional HR Management services. Their Leadership
                    Training programs have also been instrumental in developing
                    our management team. Highly recommended!
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
                    We were impressed by the Strategic Planning expertise
                    offered by WorkFlow Hub. Their insights have enabled us to
                    set clear goals and achieve sustainable growth. The Employee
                    Training programs have also been a great asset to our team.
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
                    The HR Consulting services from WorkFlow Hub have been
                    invaluable in addressing our organizational challenges.
                    Their Compensation Consulting has ensured our salary
                    structures are fair and competitive.
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
