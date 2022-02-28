import React from 'react';
import AddBook from './AddBook';
import BookItem from './BookItem';

const BookList = () => (
  <div className="book-list">
    <BookItem />
    <BookItem />
    <hr />
    <AddBook />
  </div>
);

export default BookList;
