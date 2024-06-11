import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 lg:px-0">
        <div className="space-y-4 lg:w-[600px]">
          <p className="text-sm text-[#FF78BA]">Who are we</p>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold">
            We are here to improve your business by keeping track of employees.
          </h3>
          <p className="text-[#666666]">
            We at WorkFlow Hub are hard at work to provide best possible
            solution to the leaders around the country. We are trying best
            environment for our employees while keeping them at productive at
            every possible step of the way. They are light in providing you the
            best solution.
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
            <p className="text-[#666666]">Satisfied Clients</p>
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
