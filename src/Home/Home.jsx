import React from 'react';
import './Home.css';
import logo from '../assets/Pencraftlogo.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="containerr">

      <div className="hero">
        <img src={logo} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h2>Showcase Your Writing Talent</h2>
          <p>Join a community of authors, create your profile, and showcase your writing portfolio.</p>
          <button >
            <Link to="/signup">Get Started</Link>
            </button>
        </div>
      </div>

      <div className="features" id="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Create Profiles</h3>
            <p>Build a personalized profile to showcase your work and connect with readers.</p>
          </div>
          <div className="feature-item">
            <h3>Showcase Work</h3>
            <p>Upload and organize your writing portfolio for easy access and display.</p>
          </div>
          <div className="feature-item">
            <h3>Community</h3>
            <p>Join a vibrant community of authors and readers to share and discuss ideas.</p>
          </div>
        </div>
      </div>

      <div className="testimonials" id="testimonials">
        <h2>What Our Authors Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>"Pencraft has completely transformed how I showcase my work. The community here is amazing!"</p>
            <h4>- Author Name</h4>
          </div>
          <div className="testimonial-item">
            <p>"I love how easy it is to organize my portfolio and connect with readers."</p>
            <h4>- Author Name</h4>
          </div>
          <div className="testimonial-item">
            <p>"The best platform for writers to get noticed and grow their audience."</p>
            <h4>- Author Name</h4>
          </div>
        </div>
      </div>

      <div  id="authors">
        <h2>Featured Authors</h2>
        <div className="author-grid">
          <div className="author-item">
            <img src="https://imgs.search.brave.com/T3flhLmlJPPpfXd8QpIwU-zjBS3nwoOtMvYXB57P42g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2MzL01h/aGFrYXZpX2xheG1p/X3ByYXNhZF9kZXZr/b3RhLmpwZy81MTJw/eC1NYWhha2F2aV9s/YXhtaV9wcmFzYWRf/ZGV2a290YS5qcGc" alt="Author 1" />
            <h3>Laxmi Prasad Devkota</h3>
            <p>Poem and Story.</p>
          </div>
          <div className="author-item">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Author 2" />
            <h3>Dr. Steave stephen</h3>
            <p>Short Stories</p>
          </div>
          <div className="author-item">
            <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Author 3" />
            <h3>Rahul shah</h3>
            <p>Poems </p>
          </div>
        </div>
      </div>

      <div className="cta" id="signup">
        <h2>Join Us Today</h2>
        <p>Start building your profile and showcase your writing to the world.</p>
        <button>Sign Up Now</button>
      </div>


    </div>
  );
}

export default Home;
