// src/Writeportfolio.js
import React, { useState, useEffect } from 'react'; // Import useEffect
import './Writeportfolio.css';
import { useParams } from 'react-router-dom';

const Writeportfolio = () => {
  const { id } = useParams();
  const[data, setData] = useState({
    Content: "",
    Date: "",
    Id: 0,
    PostTitle: "",
    PostType: "",
    User:{
AuthorName: "",
Description: "",
Id: 0,
category: "",
contacts: "",
totalPosts: 0,
username: ""
    }
    
  });

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the fetched data
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); // The effect will re-run if the `id` changes

  const post = {
    title: data.PostTitle,
    type: data.User.category,
    author:data.User.AuthorName,
    content: data.Content.split("\n"),
    date:data.Date
  };

  return (
    <div className="portfolioContainer">
      <Post
        title={post.title}
        type={post.type}
        author={post.author}
        content={post.content}
        date={post.date}
      />
    </div>
  );
};

const Post = ({ title, type, author, content, date }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const paragraphsPerPage = 3;
  const totalPages = Math.ceil(content.length / paragraphsPerPage);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        alert('Failed to copy link.');
        console.error('Error copying link: ', err);
      });
  };

  const renderContent = () => {
    const startIndex = currentPage * paragraphsPerPage;
    const endIndex = startIndex + paragraphsPerPage;
    return content.slice(startIndex, endIndex).map((paragraph, index) => (
      <p key={index} className="paragraph">{paragraph}</p>
    ));
  };

  return (
    <div className="article">
      <div className="article-header">
        <h1 className="article-title">{title}</h1>
        <p className="written-by">Written by</p>
        <p className="author highlight">{author}</p>
        <p className="published-on">Published on {date}</p>
      </div>
      <div className="article-content">
        <h4>{type}</h4>
        {renderContent()}
        <div className="pagination">
          <button
            className="page-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <span className="page-info">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            className="page-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="article-footer">
        <button onClick={handleLike} className="likeButton">
          {likes}{isLiked ? '❤️ Unlike' : '❤️ Like'}
        </button>
        <button onClick={handleShare} className="shareButton">
          🔗 Share
        </button>
      </div>
    </div>
  );
};

export default Writeportfolio;
