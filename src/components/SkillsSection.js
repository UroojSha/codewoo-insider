import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWordpress,
  faPhp,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import {
  faDatabase,
  faServer,
  faSearch,
  faUser,
  faPaintBrush
} from '@fortawesome/free-solid-svg-icons'; // Change the import source to free-solid-svg-icons
import Slider from 'react-slick';
import './SkillsSection.css'; // Import the CSS file with the provided styles

const SkillsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <section className="skills-section">
      <h2 className="professional-skills-heading">Professional Skills</h2>
      <Slider {...settings}>
        <div className="skill">
          <FontAwesomeIcon icon={faWordpress} className="icon wordpress" />
          <span>WordPress Development</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPhp} className="icon php" />
          <span>PHP</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} className="icon html5" />
          <span>HTML</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCss3Alt} className="icon css3" />
          <span>CSS</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} className="icon js" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faBootstrap} className="icon bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} className="icon react" />
          <span>React</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faDatabase} className="icon database" />
          <span>Database Management</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faServer} className="icon server" />
          <span>Server Management</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faSearch} className="icon seo" />
          <span>SEO</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faUser} className="icon uiux" />
          <span>UI/UX</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPaintBrush} className="icon figma" />
          <span>Figma</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
          <span>Github</span>
        </div>
        {/* Add more skills */}
      </Slider>
    </section>
  );
};

export default SkillsSection;