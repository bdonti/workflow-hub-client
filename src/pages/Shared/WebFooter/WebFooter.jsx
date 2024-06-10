import { Footer } from "flowbite-react";
import footerBg from "../../../assets/footer-wave.png";
import logo from "../../../assets/logo.png";

const WebFooter = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBg})`, minHeight: "950px" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <Footer container className="bg-transparent">
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center items-center gap-6">
                <img className="mr-3 h-16" src={logo} alt="" />
                <p className="text-white text-3xl font-bold">WorkFlow Hub</p>
              </div>
              <Footer.LinkGroup className="text-white">
                <Footer.Link>About</Footer.Link>
                <Footer.Link>Privacy Policy</Footer.Link>
                <Footer.Link>Licensing</Footer.Link>
                <Footer.Link>Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider className="border-gray-300" />
            <Footer.Copyright
              className="text-white font-bold"
              by="WorkFlowHub™ All Rights Reserved"
              year={2024}
            />
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default WebFooter;
