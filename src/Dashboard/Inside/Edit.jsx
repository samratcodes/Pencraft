import React, { useState } from 'react';
import './Edit.css';
import Card from '../../CardSection/Card';

const Edit = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Blog Post 1',
      snippet: 'This is a brief snippet of my first blog post that contains more than twenty words to demonstrate the trimming functionality. It includes various sentences to reach the word limit and provide a realistic example.',
      likes: 123,
      author: 'John Doe',
      date: 'July 27, 2024',
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      snippet: 'This is a brief snippet of my second blog post...',
      likes: 98,
      author: 'Jane Smith',
      date: 'July 28, 2024',
      category: 'Health',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      snippet: 'Snippet for blog post 3...',
      likes: 45,
      author: 'Alice Johnson',
      date: 'July 29, 2024',
      category: 'Lifestyle',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Blog Post 4',
      snippet: 'Snippet for blog post 4...',
      likes: 76,
      author: 'Bob Brown',
      date: 'July 30, 2024',
      category: 'Travel',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: 'Blog Post 5',
      snippet: 'Snippet for blog post 5...',
      likes: 102,
      author: 'Charlie Davis',
      date: 'August 1, 2024',
      category: 'Food',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: 'Blog Post 6',
      snippet: 'Snippet for blog post 6...',
      likes: 89,
      author: 'Diane Evans',
      date: 'August 2, 2024',
      category: 'Education',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 7,
      title: 'Blog Post 7',
      snippet: 'Snippet for blog post 7...',
      likes: 65,
      author: 'Ethan Green',
      date: 'August 3, 2024',
      category: 'Fitness',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      title: 'Blog Post 8',
      snippet: 'Snippet for blog post 8...',
      likes: 34,
      author: 'Fiona Hill',
      date: 'August 4, 2024',
      category: 'Fashion',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 9,
      title: 'Blog Post 9',
      snippet: 'Snippet for blog post 9...',
      likes: 54,
      author: 'George King',
      date: 'August 5, 2024',
      category: 'Science',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 10,
      title: 'Blog Post 10',
      snippet: 'Snippet for blog post 10...',
      likes: 110,
      author: 'Hannah Lee',
      date: 'August 6, 2024',
      category: 'Art',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ]);

  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Author | Freelance Writer | Editor',
    location: 'Los Angeles, California, United States of America',
    email: 'charlotte.brown@example.com',
    phone: '+1 (234) 567-890',
    linkedIn: 'https://www.linkedin.com/in/charlottebrown',
    twitter: 'https://twitter.com/charlottebrown',
    skills: [
      'Creative Writing',
      'Copywriting',
      'Editing',
      'Content Creation',
      'Research',
      'SEO Writing',
      'Storytelling',
      'Technical Writing',
      'Blogging',
    ],
  });

  // Handle input change for profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle skills change
  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...profile.skills];
    updatedSkills[index] = value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: updatedSkills,
    }));
  };

  // Add a new skill
  const addSkill = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: [...prevProfile.skills, ''],
    }));
  };

  // Remove a skill
  const removeSkill = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: prevProfile.skills.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', profile);
    console.log('Updated Blogs:', blogs);
    // Here you can send the updated profile and blogs to your server or update the state in a parent component
  };

  // Handle card field change
  const handleCardChange = (index, field, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = {
      ...updatedBlogs[index],
      [field]: value,
    };
    setBlogs(updatedBlogs);
  };

  // Delete a blog post
  const deleteCard = (index) => {
    setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
  };

  return (
    <div className='AuthorPagee AuthorPage'>
      <div className='containerp'>
        <div className='edit-profile'>
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Title</label>
              <input
                type='text'
                name='title'
                value={profile.title}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Location</label>
              <input
                type='text'
                name='location'
                value={profile.location}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Phone</label>
              <input
                type='tel'
                name='phone'
                value={profile.phone}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>LinkedIn</label>
              <input
                type='url'
                name='linkedIn'
                value={profile.linkedIn}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Twitter</label>
              <input
                type='url'
                name='twitter'
                value={profile.twitter}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Skills</label>
              {profile.skills.map((skill, index) => (
                <div key={index} className='skill-item'>
                  <input
                    type='text'
                    value={skill}
                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                  />
                  <button type='button' onClick={() => removeSkill(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type='button' onClick={addSkill}>
                Add Skill
              </button>
            </div>
            <button type='submit'>Save Changes</button>
          </form>
          <div className='software-skills'>
            <h3>My Work</h3>
            <div className='card-section'>
              {blogs.map((blog, index) => (
                <div key={blog.id} className='card'>
                  <Card blog={blog} />
                  <div className='edit-card'>
                    <input
                      type='text'
                      value={blog.title}
                      onChange={(e) =>
                        handleCardChange(index, 'title', e.target.value)
                      }
                      placeholder='Edit title'
                    />
                    <textarea
                      value={blog.snippet}
                      onChange={(e) =>
                        handleCardChange(index, 'snippet', e.target.value)
                      }
                      placeholder='Edit snippet'
                    />
                    <button
                      type='button'
                      onClick={() => deleteCard(index)}
                      className='delete-card'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
