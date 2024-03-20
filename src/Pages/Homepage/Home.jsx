import React from "react";
import ParnterSlider from "./components/parnter-slider";
import Stats from "./components/stats.jsx";
import Footer from "./components/footer.jsx";
import BenefitsCards from "./components/benefits.jsx";
import About from "./components/about.jsx";
import Herosection from "./components/Herosection.jsx";
import Testimonials from "./components/testimonials.jsx"
import BlogSection from "./components/blogs.jsx";
const HomePage = () => {
  return (
    <>
      <Herosection />
      <ParnterSlider></ParnterSlider>
      <Stats></Stats>
      <BenefitsCards></BenefitsCards>
      <Footer></Footer>
      <About></About>
      <BlogSection></BlogSection>
      <Testimonials></Testimonials>
    </>
  );
};

export default HomePage;
