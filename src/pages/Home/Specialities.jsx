import { Card } from "flowbite-react";
import leadership from "../../assets/specialities/leadership.png";
import hrManagement from "../../assets/specialities/HR_management.png";
import consultingSpecialist from "../../assets/specialities/consulting_specialist.png";
import hrConsulting from "../../assets/specialities/HR_Consulting.png";
import strategicPlanning from "../../assets/specialities/strategic_planning.png";
import employeeTraining from "../../assets/specialities/employee_training.png";
import Lottie from "lottie-react";
import specialitiesBanner from "../../assets/specialities.json";

const Specialities = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <div>
          <p className="text-sm text-[#FF78BA]">| Our Specialist</p>
          <h3 className="text-2xl lg:text-4xl text-[#353B6E] font-bold mb-10">
            Check Our Employee's Flexible Plans
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex gap-6 mx-4 lg:mx-0">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold text-right text-[#353B6E] dark:text-white">
                Leadership Training
              </h5>
              <p className="font-normal text-[#787C8B]">
                We analyse your websites structure, internal architecture &
                other key elements Consectetur adipiscing.
              </p>
            </Card>
            <div>
              <img src={leadership} alt="" />
            </div>
          </div>
          <div className="flex gap-6 mx-4 lg:mx-0">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold text-right text-[#353B6E] dark:text-white">
                HR Management
              </h5>
              <p className="font-normal text-[#787C8B]">
                We analyse your websites structure, internal architecture &
                other key elements Consectetur adipiscing.
              </p>
            </Card>
            <div>
              <img src={hrManagement} alt="" />
            </div>
          </div>
          <div className="flex gap-6 mx-4 lg:mx-0">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold text-right text-[#353B6E] dark:text-white">
                Compensation Consulting
              </h5>
              <p className="font-normal text-[#787C8B]">
                We analyse your websites structure, internal architecture &
                other key elements Consectetur adipiscing.
              </p>
            </Card>
            <div>
              <img src={consultingSpecialist} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <Lottie
            animationData={specialitiesBanner}
            loop={true}
            className="h-[550px]"
          />
        </div>
        <div>
          <div className="flex gap-6 mx-4 lg:mx-0">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold text-right text-[#353B6E] dark:text-white">
                HR Consulting
              </h5>
              <p className="font-normal text-[#787C8B]">
                We analyse your websites structure, internal architecture &
                other key elements Consectetur adipiscing.
              </p>
            </Card>
            <div>
              <img src={hrConsulting} alt="" />
            </div>
          </div>
          <div className="flex gap-6 mx-4 lg:mx-0">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold text-right text-[#353B6E] dark:text-white">
                Strategic Planning
              </h5>
              <p className="font-normal text-[#787C8B]">
                We analyse your websites structure, internal architecture &
                other key elements Consectetur adipiscing.
              </p>
            </Card>
            <div>
              <img src={strategicPlanning} alt="" />
            </div>
          </div>
          <div className="flex gap-6 mx-4 lg:mx-0">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold text-right text-[#353B6E] dark:text-white">
                Employee Training
              </h5>
              <p className="font-normal text-[#787C8B]">
                We analyse your websites structure, internal architecture &
                other key elements Consectetur adipiscing.
              </p>
            </Card>
            <div>
              <img src={employeeTraining} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
