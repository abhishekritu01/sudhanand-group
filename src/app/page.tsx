'use client';

import AboutUs from "./component/AboutSection";
import ContactUs from "./component/ContactUs";
import FooterSection from "./component/FooterSection";
import HeroSection from "./component/HeroSection";
import NavSection from "./component/NavSection";
import Portfolio from "./component/Portfolio";
import WhyChooseUs from "./component/WhyChooseUs";


const page = () => {
  return (
    <div>
      <NavSection />
      <HeroSection />
      <AboutUs />
      {/* <VisionMission /> */}
      <WhyChooseUs />
      <Portfolio />
      <ContactUs />
      <FooterSection />
    </div>
  )
}
export default page;