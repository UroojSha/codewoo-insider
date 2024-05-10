import React from 'react';
import './AboutSection.css';


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          Hey there! I’m Urooj, a passionate Frontend Developer based in Northampton. With over 3 years of experience, I’ve honed my skills in the following areas:
        </p>
        <h3 className="skills-heading">Technical Skills</h3>
        <ul className="skills-list">
          <li><strong>HTML, CSS, and JavaScript:</strong> I’m well-versed in creating clean and semantic HTML structures, styling them with CSS, and enhancing interactivity using JavaScript. Whether it’s a simple landing page or a complex web app, I’ve got you covered.</li>
          <li><strong>React:</strong> React is my playground! I love building dynamic user interfaces, managing state, and creating reusable components. From single-page applications to progressive web apps, React is my go-to framework.</li>
          <li><strong>PHP:</strong> PHP powers the backend of many websites, and I’m comfortable working with it. Whether it’s processing form data, interacting with databases, or creating custom WordPress functionality, I’ve got the PHP chops.</li>
          <li><strong>WordPress and WooCommerce:</strong> Ah, WordPress—the backbone of countless websites! I specialize in custom theme development, plugin integration, and optimizing performance. WooCommerce? No problem—I can set up your online store and customize it to perfection.</li>
          <li><strong>Custom Code Integration:</strong> Sometimes off-the-shelf solutions don’t cut it. That’s where custom code comes in. I enjoy diving into the nitty-gritty, whether it’s tweaking a WordPress template, adding custom hooks, or integrating third-party APIs.</li>
        </ul>
        <h3 className="difference-heading">Making a Difference</h3>
        <ul className="difference-list">
          <li><strong>User-Centric Design:</strong> I believe in putting users first. Crafting intuitive interfaces, optimizing load times, and ensuring accessibility are my priorities. A seamless user experience is what sets great websites apart.</li>
          <li><strong>Problem Solver:</strong> Challenges excite me! Whether it’s debugging a tricky issue or finding an elegant solution, I thrive on overcoming obstacles. Customizing WordPress functionality? Bring it on!</li>
          <li><strong>Collaborator:</strong> Effective communication and collaboration are essential. I work closely with designers, backend developers, and clients to bring ideas to life. Let’s build something amazing together.</li>
        </ul>
        <h3 className="connect-heading">Let’s Connect!</h3>
        <p className="connect-text">
          Feel free to reach out—I’d love to chat about your next project! You can find me on GitHub, Twitter, or drop me an email at urooj_shafait292@hotmail.com.
        </p>
        <p className="connect-text">
          Looking forward to making a difference with you! 
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
