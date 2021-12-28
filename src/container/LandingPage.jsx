import React from 'react';
import ImageLanding from '../components/ImageLanding';
import Navbar from '../components/Navbar';
import ServiveInfo from '../components/ServiceInfo';
import SymptomSection from '../components/SymptomSection';
import IndonesiaCases from '../components/IndonesiaCases';
import BusinessProcess from '../components/BusinessProcess';
import Fitur from '../components/Fitur';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />

      <ImageLanding />
      <ServiveInfo />
      <SymptomSection />
      <IndonesiaCases />
      <BusinessProcess />
      <Fitur />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
