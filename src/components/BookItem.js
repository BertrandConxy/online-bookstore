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
            <a href="@">Comments |</a>
          </li>
          <li>
            <a href="##">Remove |</a>
          </li>
          <li>
            <a href="###">Edit</a>
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
