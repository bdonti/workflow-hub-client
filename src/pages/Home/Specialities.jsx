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
    <div className="mb-20">
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
                Our Leadership Training programs are designed to cultivate the
                skills and qualities necessary for effective leadership.
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
                Our HR Management services streamline your human resources
                processes, ensuring efficient and compliant handling of
                recruitment, employee relations, performance management, and
                benefits administration.
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
                Our Compensation Consulting services provide expert advice on
                structuring competitive and equitable compensation packages.
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
                Our HR Consulting services offer strategic insights and
                practical solutions to address your human resources challenges.
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
                Our Strategic Planning services assist organizations in defining
                their vision, setting achievable goals, and developing
                actionable plans.
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
                Our Employee Training programs are tailored to enhance the
                skills and competencies of your workforce. We offer a variety of
                training modules designed to improve performance, boost
                productivity, and foster professional development.
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
