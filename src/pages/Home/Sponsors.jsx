import { GiBookAura } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { SiAdidas, SiWalmart } from "react-icons/si";

const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-36 text-[#353B6E] text-6xl mt-16 mb-20">
      <div>
        <SiWalmart />
      </div>
      <div>
        <GiBookAura />
      </div>
      <div>
        <SiAdidas />
      </div>
      <div>
        <RiVisaLine />
      </div>
    </div>
  );
};

export default Sponsors;
