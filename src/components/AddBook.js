import React from 'react';

const AddBook = () => (
  <div className="Add-book">
    <h2>ADD NEW BOOK</h2>
    <form className="add-form">
      <input type="text" name="book-name" key="name-input" placeholder="Book title" value="" />
      <select key="book-category">
        <option value="Category">Category</option>
        <option value="Action">Action</option>
        <option value="Fiction">Fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Inspiration">Inspiration</option>
        <option value="Business">Business</option>
      </select>
      <input type="submit" value="Add book" />
    </form>
  </div>
);

export default AddBook;
