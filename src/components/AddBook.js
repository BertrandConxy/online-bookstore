import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeHandler = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
      category: inputText.category,
    };
    dispatch(addBook(newBook));
    setInputText({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div className="Add-book">
      <h2>ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          key="title-input"
          placeholder="Book title"
          value={inputText.title}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="author"
          key="author-input"
          placeholder="Book author"
          value={inputText.author}
          onChange={changeHandler}
        />
        <select
          name="category"
          key="book-category"
          onChange={changeHandler}
          value={inputText.category}
        >
          <option value="" hidden>Category</option>
          <option value="Action">Action</option>
          <option name="category">Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Inspiration">Inspiration</option>
          <option value="Business">Business</option>
        </select>
        <input type="submit" value="Add book" />
      </form>
    </div>
  );
};

export default AddBook;
