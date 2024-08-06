// src/Post.jsx
import React, { useState } from 'react';
import './Post.css';

const Post = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Poem');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission
    setMessage('Post submitted successfully!');
    // Reset form
    setTitle('');
    setType('Poem');
    setAuthor('');
    setContent('');
  };

  return (
    < div className='post'>
        <div className="post-container">
      <h2>Create a New Post</h2>
      {message && <p className="message">{message}</p>}
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Poem">Poem</option>
            <option value="Short Story">Short Story</option>
            <option value="Long Story">Long Story</option>
            <option value="Article">Article</option>
            <option value="Essay">Essay</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            required
          ></textarea>
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
