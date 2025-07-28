import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
      <WhyUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;