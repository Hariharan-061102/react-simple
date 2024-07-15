import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './data/books';
import Book from './components/Book';

const BookList = () => {
  function addToCart(title, author) {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${title} by ${author}`;
    
    // Add the list item to the cart
    document.getElementById('cart-items').appendChild(li);
}
  return (
    <div className='main-body'>
      <h1 className='main-title'>
        Harry Potter Bookstore <span>(Top choice's)</span>
      </h1>
      <div className='date'>
        <h2>Shopping Cart</h2>
        <ul id="cart-items"></ul>
    </div>
      <article className='book-list'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </article>
      <section className='bottom'>
        <h5 >
          <p>&copy; Harry Potter Bookstore,Pvt limited.</p>
        </h5>
        <br/>
      </section>
    </div>
  );
};

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
