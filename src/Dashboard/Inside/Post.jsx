import React, { useState } from 'react';
import axios from 'axios';
import './Post.css';

const Post = () => {
  const [post, setPost] = useState({
    PostTitle: '',
    PostType: 'poem',
    Content: '',
    Date: new Date().toISOString()  // Date in ISO format
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/posts/', 
        { ...post },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      if (response.status === 201) {
        setMessage('Post submitted successfully!');
        // Reset form
        setPost({
          PostTitle: '',
          PostType: 'poem',
          Content: '',
          Date: new Date().toISOString()
        });
      } else {
        setMessage(`Failed to submit post. Status code: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        setMessage(`Failed to submit post. Error: ${error.response.data}`);
      } else if (error.request) {
        console.error('Error request data:', error.request);
        setMessage('Failed to submit post. No response received.');
      } else {
        console.error('Error message:', error.message);
        setMessage('Failed to submit post. Check console for details.');
      }
    }
  };

  return (
    <div className='post'>
      <div className="post-container">
        <h2>Create a New Post</h2>
        {message && <p className="message">{message}</p>}
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="PostTitle">Title</label>
            <input
              type="text"
              id="PostTitle"
              value={post.PostTitle}
              onChange={(e) => setPost({ ...post, PostTitle: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="PostType">Type</label>
            <select
              id="PostType"
              value={post.PostType}
              onChange={(e) => setPost({ ...post, PostType: e.target.value })}
            >
              <option value="poem">Poem</option>
              <option value="short story">Short Story</option>
              <option value="long story">Long Story</option>
              <option value="article">Article</option>
              <option value="essay">Essay</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Content">Content</label>
            <textarea
              id="Content"
              value={post.Content}
              onChange={(e) => setPost({ ...post, Content: e.target.value })}
              rows="10"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="Date">Date</label>
            <input
              type="datetime-local"
              id="Date"
              value={post.Date.slice(0, 16)}  // Format for datetime-local
              onChange={(e) => setPost({ ...post, Date: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
