import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './Navbar';
import BooksPage from './BooksPage';
import CategoriesPage from './CategoriesPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </>
);

export default App;
