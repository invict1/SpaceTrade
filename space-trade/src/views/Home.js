import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />

      <div className="container-sm">
        <FeaturesTiles />
        <Testimonial topDivider />
        <Cta split />
      </div>
    </>
  );
}

export default Home;