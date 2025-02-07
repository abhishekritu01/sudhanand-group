'use client';

import NavSection from "./component/NavSection";
import HeroSection from "./component/HeroSection";
import AboutUs from "./component/AboutSection";
import VisionMission from "./component/VissionMission";
import WhyChooseUs from "./component/WhyChooseUs";
import Portfolio from "./component/Portfolio";
import ContactUs from "./component/ContactUs";
import FooterSection from "./component/FooterSection";


const page = () => {
  return (
    <div>
      <NavSection />
      <HeroSection />
      <AboutUs />
      <VisionMission />
      <WhyChooseUs />
      <Portfolio />
      <ContactUs />
      <FooterSection />
    </div>
  )
}
export default page;