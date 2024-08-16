import React, { useState, useEffect } from 'react';
import './Edit.css';
import Card from '../../HomeSection/CardSection/Card';
import axios from 'axios';

const Edit = () => {
  const [id, setId] = useState(3);
  const [authorData, setAuthorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/auth/user', { withCredentials: true });
      setId(response.data.Id);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/authors/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setAuthorData(data);

        // Initialize profile and blogs
        setProfile({
          name: data.AuthorName || '',
          title: data.Description,
          location: 'Los Angeles, California, United States of America',
          contactInfo: data.contacts || '',
          skills: data.skills || [], // Adjust if necessary
        });

        const transformedBlogs = data.Posts.map((post) => ({
          id: post.Id,
          title: post.PostTitle,
          snippet: post.Content.substring(0, 100) + '...',
          content: post.Content,
          date: post.Date,
          postType: post.PostType,
        }));

        setBlogs(transformedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch author data:', error);
        setLoading(false);
        setError(error);
      }
    };

    fetchAuthorData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!profile) {
    return <div>No data available</div>;
  }

  // Handle input change for profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  
  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...profile.skills];
    updatedSkills[index] = value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: updatedSkills,
    }));
  };

  const addSkill = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: [...prevProfile.skills, ''],
    }));
  };

  const removeSkill = (index) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills: prevProfile.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedProfile =  {
        AuthorName:profile.name,
        Description:profile.title,
        contacts:profile.contactInfo
      }
      console.log(formattedProfile,profile)
      const profileResponse = await axios.put(`http://localhost:8000/api/authors/${id}`, formattedProfile, {
        withCredentials: true,
      });

      console.log('Profile updated successfully:', profileResponse.data);

      const blogUpdates = blogs.map(blog => {
        return axios.put(`http://localhost:8000/api/posts/${blog.id}`, {
          Content: blog.content,
          Date: blog.date,
          Id: blog.id,
          PostTitle: blog.title,
          PostType: blog.postType
        }, {
          withCredentials: true,
        });
      });

      await Promise.all(blogUpdates);

      console.log('Blogs updated successfully');
      alert('Profile and Blogs updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error.response ? error.response.data : error);
      alert('Failed to update data. Please try again.');
    }
  };

  const handleCardChange = (index, field, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = {
      ...updatedBlogs[index],
      [field]: value,
    };
    setBlogs(updatedBlogs);
  };

  const savePostChanges = async (index) => {
    const updatedBlog = blogs[index];
    try {
      const response = await axios.put(`http://localhost:8000/api/posts/${updatedBlog.id}`, {
        Content: updatedBlog.content,
        Date: updatedBlog.date,
        Id: updatedBlog.id,
        PostTitle: updatedBlog.title,
        PostType: updatedBlog.postType
      }, {
        withCredentials: true,
      });
      console.log(`Blog ${updatedBlog.id} updated successfully:`, response.data);
      alert('Blog post updated successfully!');
    } catch (error) {
      console.error('Error updating blog post:', error.response ? error.response.data : error);
      alert('Failed to update blog post. Please try again.');
    }
  };

  const deleteCard = async (index) => {
    const blogId = blogs[index].id;
    try {
      await axios.delete(`http://localhost:8000/api/posts/${blogId}`, {
        withCredentials: true,
      });
      setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
      alert('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog post:', error.response ? error.response.data : error);
      alert('Failed to delete blog post. Please try again.');
    }
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
              <label>Description</label>
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
              <label>Contact Info</label>
              <input
                type='text'
                name='contactInfo'
                value={profile.contactInfo}
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
                      value={blog.content}
                      onChange={(e) =>
                        handleCardChange(index, 'content', e.target.value)
                      }
                      placeholder='Edit content'
                    />
                    <input
                      type='date'
                      value={new Date(blog.date).toISOString().slice(0, 10)}
                      onChange={(e) =>
                        handleCardChange(index, 'date', new Date(e.target.value).toISOString())
                      }
                      placeholder='Edit date'
                    />
                    <input
                      type='text'
                      value={blog.postType}
                      onChange={(e) =>
                        handleCardChange(index, 'postType', e.target.value)
                      }
                      placeholder='Edit post type'
                    />
                    <button
                      type='button'
                      onClick={() => savePostChanges(index)}
                      className='save-post'
                    >
                      Save Changes
                    </button>
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
