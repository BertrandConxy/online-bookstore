import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks, removeBook } from "../redux/books/books";

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
              <h2 className="book-title">{book.title}</h2>
              <span className="book-author">Bertrand Ish</span>
              <div className="links-container">
                <ul>
                  <li>
                    <button
                      id={book.item_id}
                      className="btn-1 line"
                      type="button"
                    >
                      Comments
                    </button>
                  </li>
                  <li>
                    <button
                      id={book.item_id}
                      className="btn-1 line"
                      type="button"
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      id={book.item_id}
                      className="btn-1"
                      type="button"
                      onClick={removeHandler}
                    >
                      Remove
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="progress">
              <CircularProgress
                className="progressBar"
                variant="determinate"
                color="primary"
                sx={{
                  width: 500,
                }}
                value={50}
              />
              <div className="numerics">
                <span className="number">5%</span>
                <span className="completed">completed</span>
              </div>
            </div>
            <div className="view-progress">
              <span className="chapter-title">Current chapter</span>
              <h3 className="chapter-number">Chapter 1</h3>
              <button id={book.item_id} type="button" className="btn-2">
                Update progress
              </button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return <h2>No books added yet</h2>;
};

export default BookItem;
