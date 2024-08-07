import React from 'react';

const AuthorCard = ({ author }) => {
  const { AuthorName, Description, Id, Username, category, totalPosts,ImageUrl  } = author;
  const likes=45;

  return (
    <div className="author-card" role="button" onClick={() => window.location.href = `/author/${Id}`}>
      <div className='authimg_cover'>
        <img src={ImageUrl} alt={`Image of ${AuthorName}`} className="author-image" />
      </div>
      <div className="author-content">
        <h2 className="author-name">{AuthorName}</h2>
        <p className="author-bio">{Description}</p>
        <p className="author-category">{category}</p>
        <div className="author-details">
        <span className="author-likes"> {Username}</span>
          <span className="author-posts">Total Posts: {totalPosts}</span>
        </div>
        <button className="view-more-button" onClick={() => window.location.href = `/author/${Id}`}>
          View More <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default AuthorCard;
