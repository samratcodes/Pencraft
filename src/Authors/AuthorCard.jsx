import React from 'react';

const AuthorCard = ({ author }) => {
  const { id, name, bio, likes, category, writingsCount, imageUrl } = author;

  return (
    <div className="author-card" role="button" onClick={() => window.location.href = `/author`}>
      <div className='authimg_cover'>
        <img src={imageUrl} alt={`Image of ${name}`} className="author-image" />
      </div>
      <div className="author-content">
        <h2 className="author-name">{name}</h2>
        <p className="author-bio">{bio}</p>
        <p className="author-category">{category}</p>
        <div className="author-details">
          <span className="author-likes">Likes: {likes}</span>
          <span className="author-writings">Writings: {writingsCount}</span>
        </div>
        <button className="view-more-button" onClick={() => window.location.href = `/author`}>View More <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default AuthorCard;
