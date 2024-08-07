import React, { useState, useEffect } from 'react';
import CardSection from '../CardSection/CardSection';
import Card from '../CardSection/Card';
import './Writing.css';

const Writings = () => {
  const [sortOption, setSortOption] = useState('date');
  const [filterOption, setFilterOption] = useState('');
  const [blogs, setBlogs] = useState([]); // Initialize blogs as an empty array

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();

        // Transform the fetched data into the format expected by the component
        const transformedBlogs = data.map((post) => ({
          id: post.Id,
          title: post.PostTitle,
          snippet: post.Content.substring(0, 100) + '...', // Trim the content to create a snippet
          likes: Math.floor(Math.random() * 200), // Placeholder for likes (since this data isn't provided)
          author: post.User.username,
          date: new Date(post.Date).toLocaleDateString(), // Format the date as needed
          category: post.PostType, // Assuming PostType corresponds to the content type like poem, short story, etc.
          imageUrl: 'https://via.placeholder.com/300', // Placeholder image URL
        }));

        setBlogs(transformedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const sortedAndFilteredBlogs = blogs
    .filter((blog) => (filterOption ? blog.category === filterOption : true))
    .sort((a, b) => {
      if (sortOption === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOption === 'likes') {
        return b.likes - a.likes;
      }
      return 0;
    });

  return (
    <div className='Writings'>
      <div className='writing-container'>
        <div className='writingtitle'>
          <i className='fa-solid fa-book'></i>
          <h1>Writings</h1>
        </div>
        <div id='wcsection'>
          <div className='filters'>
            <h1>Filters</h1>
            <div>
              <label htmlFor='sort'>Sort by:</label>
              <select
                id='sort'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value='date'>Date</option>
                <option value='likes'>Likes</option>
              </select>
            </div>
            <div>
              <label htmlFor='filter'>Filter by category:</label>
              <select
                id='filter'
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
              >
                <option value=''>All</option>
                <option value='poem'>Poem</option>
                <option value='shortstory'>Short Story</option>
                <option value='longstory'>Long Story</option>
                <option value='essay'>Essay</option>
                <option value='article'>Article</option>
              </select>
            </div>
          </div>
          <div className='blog-list'>
            {sortedAndFilteredBlogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writings;
