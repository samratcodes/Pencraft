import React, { useState } from 'react';
import CardSection from '../CardSection/CardSection';
import Card from '../CardSection/Card';
import './Writing.css';
const Writings = () => {
  const [sortOption, setSortOption] = useState('date');
  const [filterOption, setFilterOption] = useState('');

  const blogs = [
    {
      id: 1,
      title: 'Blog Post 1',
      snippet: 'This is a brief snippet of my first blog post that contains more than twenty words to demonstrate the trimming functionality. It includes various sentences to reach the word limit and provide a realistic example.',
      likes: 123,
      author: 'John Doe',
      date: 'July 27, 2024', 
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Blog Post 2',
      snippet: 'This is a brief snippet of my second blog post...',
      likes: 98,
      author: 'Jane Smith',
      date: 'July 28, 2024',
      category: 'Health',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Blog Post 3',
      snippet: 'Snippet for blog post 3...',
      likes: 45,
      author: 'Alice Johnson',
      date: 'July 29, 2024',
      category: 'Lifestyle',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 4,
      title: 'Blog Post 4',
      snippet: 'Snippet for blog post 4...',
      likes: 76,
      author: 'Bob Brown',
      date: 'July 30, 2024',
      category: 'Travel',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 5,
      title: 'Blog Post 5',
      snippet: 'Snippet for blog post 5...',
      likes: 102,
      author: 'Charlie Davis',
      date: 'August 1, 2024',
      category: 'Food',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 6,
      title: 'Blog Post 6',
      snippet: 'Snippet for blog post 6...',
      likes: 89,
      author: 'Diane Evans',
      date: 'August 2, 2024',
      category: 'Education',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 7,
      title: 'Blog Post 7',
      snippet: 'Snippet for blog post 7...',
      likes: 65,
      author: 'Ethan Green',
      date: 'August 3, 2024',
      category: 'Fitness',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 8,
      title: 'Blog Post 8',
      snippet: 'Snippet for blog post 8...',
      likes: 34,
      author: 'Fiona Hill',
      date: 'August 4, 2024',
      category: 'Fashion',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 9,
      title: 'Blog Post 9',
      snippet: 'Snippet for blog post 9...',
      likes: 54,
      author: 'George King',
      date: 'August 5, 2024',
      category: 'Science',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 10,
      title: 'Blog Post 10',
      snippet: 'Snippet for blog post 10...',
      likes: 110,
      author: 'Hannah Lee',
      date: 'August 6, 2024',
      category: 'Art',
      imageUrl: 'https://via.placeholder.com/300'
    }
  ];

  const sortedAndFilteredBlogs = blogs
    .filter(blog => (filterOption ? blog.category === filterOption : true))
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
      <i className="fa-solid fa-book"> </i>
        <h1>Writings</h1>
      </div>
     <div id='wcsection'>
     <div className='filters' >
        <h1> Filters</h1>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="date">Date</option>
            <option value="likes">Likes</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter">Filter by category:</label>
          <select id="filter" value={filterOption} onChange={e => setFilterOption(e.target.value)}>
            <option value="">All</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Fitness">Fitness</option>
            <option value="Fashion">Fashion</option>
            <option value="Science">Science</option>
            <option value="Art">Art</option>
          </select>
        </div>
      </div>
      <div>
        
      {sortedAndFilteredBlogs.map(blog => (
        <Card key={blog.id} blog={blog} />
      ))}
      </div>
    </div> 
     </div>
    </div>

  );
};

export default Writings;
