const ADD_BOOK = 'online-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'online-bookstore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'online-bookstore/books/LOAD_BOOKS';
const appId = 'ZmwGVqX3aGauqC4aSYAF';

const initialState = [
];

export const addBook = (newBook) => async (dispatch) => {
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newBook),
    },
  );
  if (response.ok) {
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const body = {
    item_id: id,
  };
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  if (response.ok) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const loadBooks = () => async (dispatch) => {
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`,
  );
  const result = await response.json();
  const data = Object.entries(result).map(([key, value]) => {
    const { title, category } = value[0];
    return {
      item_id: key,
      title,
      category,
    };
  });
  if (data) {
    dispatch({
      type: LOAD_BOOKS,
      payload: data,
    });
  }
};

const reducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case LOAD_BOOKS:
      return payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== id);

    default:
      return state;
  }
};

export default reducer;
