import React, { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard';
import './Author.css';

const Authors = () => {
  // State to store authors data
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch authors data from the API
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/authors');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAuthors(data); // Update state with fetched data
        setLoading(false);
        console.log(data) // Set loading to false once data is fetched
      } catch (error) {
        setError(error); // Set error if fetching fails
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='authorsection'>
      <div className='authorss'>
        <div className='authortitle'>
          <i className='fa-solid fa-people-group'></i>
          <h1 className='author-title'>Authors</h1>
        </div>
        
        <div className='authors'>
          {authors.map((author) => (
            <AuthorCard key={author.Id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Authors;
