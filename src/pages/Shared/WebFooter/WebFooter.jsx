import { Footer } from "flowbite-react";
import footerBg from "../../../assets/footer-wave.png";

const WebFooter = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footerBg})`, minHeight: "800px" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <Footer container className="bg-transparent">
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
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
              by="Flowbite™"
              year={2024}
            />
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default WebFooter;
