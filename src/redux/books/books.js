const ADD_BOOK = 'online-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'online-bookstore/books/REMOVE_BOOK';

const initialState = [
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [
        ...state, payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== id);

    default:
      return state;
  }
};

export default reducer;
