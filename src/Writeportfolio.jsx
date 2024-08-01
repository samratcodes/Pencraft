// src/Writeportfolio.js
import React, { useState } from 'react';
import './Writeportfolio.css';

const Writeportfolio = () => {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  const post = {
    title: 'The Enchanted Forest Journey',
    type: 'Short Story',
    author: 'John Doe',
    content: [
      `Once upon a time in a mysterious forest, there was a hidden secret. The trees whispered stories of old, and the leaves danced to the tune of the wind. The forest was alive with magic, and every corner held a new adventure. The sunlight filtered through the dense canopy, casting dappled shadows on the forest floor.`,
      `Deep within the forest, there was a clearing where a majestic oak tree stood. This tree was ancient, its trunk wide and gnarled, and its branches stretched out like welcoming arms. Legends spoke of the tree's wisdom and the magical creatures that guarded it.`,
      `One day, a young explorer named Elara ventured into the forest. She had heard tales of the magical clearing and the secrets it held. Determined to uncover the truth, she journeyed through the thick underbrush, following the whispers of the trees. As she reached the clearing, she felt a sense of awe and wonder. The air was thick with enchantment, and the oak tree seemed to glow with an inner light.`,
      `Elara approached the tree, and as she did, she noticed a small door carved into its trunk. Her heart raced with excitement and curiosity. She pushed the door open and stepped inside, finding herself in a cozy, warm space filled with soft light. Shelves lined with ancient books and jars of strange, glowing substances surrounded her.`,
      `At the center of the room was a pedestal with a shimmering crystal. Elara reached out to touch it, and as her fingers brushed its surface, she felt a surge of energy. The crystal pulsed with light, and suddenly, she was transported to another world. A world where the forest was even more vibrant, and magical creatures roamed freely.`,
      `Elara spent what felt like hours exploring this new realm, meeting fairies, talking animals, and wise old wizards. She learned the secrets of the forest and its magic, and when she finally returned to her own world, she carried with her a piece of that magic in her heart.`,
      `From that day on, Elara became the guardian of the forest, protecting its secrets and sharing its wonders with those who were brave and curious enough to seek them. And the mysterious forest remained a place of magic and adventure for all who dared to enter.`
    ],
    date: 'July 29, 2024'
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
