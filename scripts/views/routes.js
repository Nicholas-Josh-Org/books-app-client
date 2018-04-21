'use strict';

page('/', app.bookView.initIndexPage);

// if(window.location.protocol.startsWith('https:')) {
//   page.base('/book-list-client');
// }

page('/books/*', (ctx, next) => {
  $('.book-view').empty().hide();
  $('.book-create').hide();
  next();
});

page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id));

page.start();

