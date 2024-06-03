import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./Services";
import Specialities from "./Specialities";
import Sponsors from "./Sponsors";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <Sponsors></Sponsors>
      <Specialities></Specialities>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
