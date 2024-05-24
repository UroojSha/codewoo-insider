import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWordpress,
  faShopify,
  faPhp,
  faHtml5,
  faCss3Alt,
  faJs, // Corrected import
  faBootstrap,
  faReact,
  faLiquid,
  faGithub,
  faFigma
} from '@fortawesome/free-brands-svg-icons';

import {
  faServer,
  faSearch,
  faPaintBrush
} from '@fortawesome/free-solid-svg-icons'; // Corrected import
import Slider from 'react-slick';
import './SkillsSection.css'; 

const skills = [
  { name: 'WordPress', icon: faWordpress },
  { name: 'Shopify', icon: faShopify },
  { name: 'PHP', icon: faPhp },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'JavsScript', icon: faJs },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'React', icon: faReact },
  { name: 'Liquid', icon: faLiquid },
  { name: 'GitHub', icon: faGithub }, // Corrected icon
  { name: 'Figma', icon: faFigma }, // Corrected icon
  { name: 'SEO', icon: faSearch },
  { name: 'Server Management', icon: faServer },
  { name: 'UX/UI', icon: faPaintBrush },
  // ... add other skills with corresponding FontAwesome icons
];

const SkillsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust autoplay speed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='skills-section'>
      <h2>Professional Skills</h2>
      <Slider {...settings}>
        {skills.map((skill) => (
          <div key={skill.name} className='skill'>
            <FontAwesomeIcon icon={skill.icon} size='4x' />
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSection;
