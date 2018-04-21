'use strict';
var app = app || {};

(module => {

  const createBook = {};

  createBook.init = () => {
    $('.book-create').off().on('submit', 'form', () => {
      // event.preventDefault();
      const author = $('#book-create-author').val('');
      const title = $('#book-create-title').val('');
      const isbn = $('#book-create-isbg').val('');
      app.Book.create({author},{title},{isbn});
      // $('#book-create-author').val('');
      // $('#book-create-title').val('');
      console.log('posted');
    });
    console.log('posted?');
    // $('.book-create').show();
  };

  module.createBook = createBook;

})(app);