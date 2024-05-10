import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection     />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
