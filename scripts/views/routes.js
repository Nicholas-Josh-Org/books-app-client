'use strict';

page('/', app.bookView.initIndexPage);
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id));

page.start();



//.empty()   !!!!!!