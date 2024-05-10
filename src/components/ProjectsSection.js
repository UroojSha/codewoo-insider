import React from 'react';
import './ProjectSection.css'; // Import the CSS file with the provided styles

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="project-heading">My Projects</h2>
      <div className="projects-grid">
        {/* Project tiles */}
        <div className="project project-tile">
          <a href="https://uroojsha.github.io/Classic-Snake-Game/" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://miro.medium.com/v2/resize:fit:1400/1*spTwLANfg8qPWZ0-5bt1pQ.png" alt="Classic Snake Game" />
            <p className="project-title">Classic Snake Game-React</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="https://uroojsha.github.io/Classic-Snake-Game/" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/pWCM26K/splash.png" alt="Classic Snake Game" />
            <p className="project-title">SplashColoringZone-React</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="https://uroojsha.github.io/LittleLemon/" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Fip-nQEj6xWBTylkp_SMSg.png" alt="Little Lemon" />
            <p className="project-title">Little Lemon</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/LittleCafe/index.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/bKknTg9/littlecafe.png" alt="Little Cafe" />
            <p className="project-title">Little Cafe</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.infinityfreeapp.com/product/happy-ninja-2/" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/s3WsKKY/Screenshot-2024-05-09-at-09-52-23.png" alt="Woocommerce Customisation" />
            <p className="project-title">Woocommerce Customisation</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="https://www.youtube.com/watch?v=wLh-uVBX01Q" target="_blank" rel="noreferrer">
            <iframe className="project-video" width="560" height="315" src="https://www.youtube.com/embed/wLh-uVBX01Q?si=RNeAJhcXuHIVkC9f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="project-title">Wordpress site Bulk Renaming</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="https://www.figma.com/proto/FKjMG2vuigMPMqok4Jw34c/Untitled?page-id=0%3A1&node-id=3-6&viewport=16%2C4592%2C1.49&scaling=scale-down" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/Vw6r3NH/figma.png" alt="Woocommerce Customisation" />
            <p className="project-title">Figma Designed Website</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/tribute%20page/index.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/d4fXg4Z/cssflexbox.png" alt="Woocommerce Customisation" />
            <p className="project-title">CSS Flexbox</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="https://uroojsha.github.io/Scancruit-website/" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/FmTG0nr/scanu.png" alt="Website Replica" />
            <p className="project-title">Website Replica</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/W3%20%20CV/index.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/9pfs5TZ/CV.png" alt="CV /portfolio" />
            <p className="project-title">"Interactive HTML/CSS Resume"</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/typography/index.html?i=1" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/JtnYCsr/typography.png" alt="Woocommerce Customisation" />
            <p className="project-title">Typography</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/WebsitePro/index.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/dQgtsXX/coffee.png" alt="Woocommerce Customisation" />
            <p className="project-title">Website with HTML</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/form_/form.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/dM2WH2p/survey.png" alt="Woocommerce Customisation" />
            <p className="project-title">Survey Form</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/tribute%20page/index.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/Vg1rV9p/tribute.png" alt="Woocommerce Customisation" />
            <p className="project-title">Tribute Page</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/balancesheet/sheet.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/t36jSXc/balancesheet.png" alt="Woocommerce Customisation" />
            <p className="project-title">Balance Sheet</p>
          </a>
        </div>
        <div className="project project-tile">
          <a href="http://codewooinsider.great-site.net/boottra/boots.html" target="_blank" rel="noreferrer">
            <img className="project-image" src="https://i.ibb.co/DDX8Gm9/boots.png" alt="Woocommerce Customisation" />
            <p className="project-title">Bootstrap Website</p>
          </a>
        </div>
        {/* Add more project tiles */}
      </div>
    </section>
  );
};

export default ProjectsSection;
