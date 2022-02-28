import React from 'react';

const BookItem = () => (
  <div className="book-item">
    <div className="book-details">
      <span className="book-category">Action</span>
      <h2>The Hunger Games</h2>
      <span>Suzzane Collins</span>
      <div className="links-container">
        <ul>
          <li>
            <button type="button" key="comment-btn">
              Comments
            </button>
          </li>
          <li>
            <button type="button" key="edit-btn">
              Edit
            </button>
          </li>
          <li>
            <button type="button" key="remove-btn">
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="progress">
      <span>64%</span>
      <span>completed</span>
    </div>
    <div className="view-progress">
      <span>Current chapter</span>
      <h3>Chapter 5</h3>
      <button type="button">Update progress</button>
    </div>
  </div>
);

export default BookItem;
