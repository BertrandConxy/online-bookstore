import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = () => {
  const bookState = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  if (bookState !== []) {
    return (
      <>
        {bookState.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-details">
              <span className="book-category">{book.category}</span>
              <h2>{book.title}</h2>
              <span>{book.author}</span>
              <div className="links-container">
                <ul>
                  <li>
                    <button id={book.id} type="button">
                      Comments
                    </button>
                  </li>
                  <li>
                    <button id={book.id} type="button">
                      Edit
                    </button>
                  </li>
                  <li>
                    <button id={book.id} type="button" onClick={removeHandler}>
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
              <button id={book.id} type="button">Update progress</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (<h2>No books added yet</h2>);
};

export default BookItem;
