import React from 'react';
import './AuthorPage.css';
import user from './assets/user.jpeg';
import Card from './CardSection/Card';
import CardSection from './CardSection/CardSection';

const AuthorPage = () => {
  return (
    <div className='AuthorPage'>
      <div className="container">
        <div className="profile-image">
          <img src='
       https://images.pexels.com/photos/7811599/pexels-photo-7811599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt="Author Profile" />
        </div>
       
        <div className="profile-info">
          <h2>jhon Doe</h2>
          <p>Author | Freelance Write | Editor</p>
          <p>Los Angeles, California,r United States of America</p>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:charlotte.brown@example.com">charlotte.brown@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/charlottebrown" target="_blank" rel="noopener noreferrer">linkedin.com/in/charlottebrown</a></p>
          <p>Twitter: <a href="https://twitter.com/charlottebrown" target="_blank" rel="noopener noreferrer">@charlottebrown</a></p>
        </div>
        
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-list">
            <button>Creative Writing</button>
            <button>Copywriting</button>
            <button>Editing</button>
            <button>Content Creation</button>
            <button>Research</button>
            <button>SEO Writing</button>
            <button>Storytelling</button>
            <button>Technical Writing</button>
            <button>Blogging</button>
          </div>
        </div>
        <div className="software-skills">
          <h3>My work</h3>
          <div>
            <CardSection/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;
