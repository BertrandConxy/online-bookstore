import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks, removeBook } from '../redux/books/books';

const BookItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const bookState = useSelector((state) => state.booksReducer);

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  if (bookState !== []) {
    return (
      <>
        {bookState.map((book) => (
          <div key={book.item_id} className="book-item">
            <div className="book-details">
              <span className="book-category">{book.category}</span>
              <h2>{book.title}</h2>
              <span>Bertrand Ish</span>
              <div className="links-container">
                <ul>
                  <li>
                    <button id={book.item_id} type="button">
                      Comments
                    </button>
                  </li>
                  <li>
                    <button id={book.item_id} type="button">
                      Edit
                    </button>
                  </li>
                  <li>
                    <button id={book.item_id} type="button" onClick={removeHandler}>
                      Remove
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="progress">
              <span>5%</span>
              <span>completed</span>
            </div>
            <div className="view-progress">
              <span>Current chapter</span>
              <h3>Chapter 1</h3>
              <button id={book.item_id} type="button">Update progress</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (<h2>No books added yet</h2>);
};

export default BookItem;
