import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
<div className='aboutcontainer'>
  <div className='abouttitle'>
  <i className="fa-solid fa-circle-info"></i>
    <h1>About Us</h1>
  </div>
<div className="about-content">
        <section>
          <h2>Welcome</h2>
          <p>Welcome to PenCraft, a platform where authors can share their writing and connect with readers. Our mission is to provide a creative space for authors to showcase their talents and for readers to discover new and exciting writing.</p>
        </section>
        <section>
          <h2>Our Story</h2>
          <p>PenCraft was founded by Abin Pariyar with the vision of creating a community where writers and readers can come together. Whether you are an established author or just starting, PenCraft offers the tools and support you need to share your work and grow your audience.</p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>Our mission is to empower writers by providing them with a platform to share their stories and connect with a global audience. We believe in the power of words and the impact they can have on the world.</p>
        </section>
        <section>
          <h2>Our CEO</h2>
          <p>Abin Pariyar is the CEO and founder of PenCraft. With a passion for writing and a vision to create a community for authors and readers, Abin has been instrumental in shaping PenCraft into the platform it is today.</p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to learn more about PenCraft, please feel free to contact us at <a href="mailto:support@pencraft.com">support@pencraft.com</a>.</p>
        </section>
      </div>
</div>
    </div>
  );
};

export default AboutUs;
