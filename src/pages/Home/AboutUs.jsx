import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 lg:px-0">
        <div className="space-y-4 lg:w-[700px]">
          <p className="text-sm text-[#FF78BA]">Who are we</p>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold">
            We are here to improve your business by keeping track of employees.
          </h3>
          <p className="text-[#666666]">
            Lorem ipsum dolor amet consectetures adipiscing do eiusmod tempor
            incididunt abore dolore magna ut enim ad minim veniam ut
            exercitation.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <h1>
              <CountUp
                className="text-[40px] text-[#353B6E] font-bold"
                end={96}
                duration={5}
              />
              %
            </h1>
            <p className="text-[#666666]">Our Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <h1>
              <CountUp
                className="text-[40px] text-[#353B6E] font-bold"
                end={57}
                duration={5}
              />
              +
            </h1>
            <p className="text-[#666666]">Partners Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
