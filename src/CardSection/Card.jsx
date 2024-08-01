import React from 'react';
import './Card.css';

const Card = ({ blog }) => {
  const { id, title, snippet, likes, author, date, category } = blog;

  const trimSnippet = (snippet, wordLimit) => {
    const words = snippet.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : snippet;
  };

  return (
    <div className="card" onClick={() => window.location.href = `/written/${id}`}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-snippet">{trimSnippet(snippet, 40)}</p>
        <div className="card-details">
          <span className="card-author">by {author}</span>
          <span className="card-date">{date}</span>
        </div>
        <div className="card-footer">
          <span className="card-likes"> {likes}</span>
          <span className="card-category">{category}</span>
        </div>
        <button className="view-post-button">Read more</button>
      </div>
    </div>
  );
}

export default Card;
