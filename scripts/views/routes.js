'use strict';

page('/', app.bookView.initIndexPage);
page('/books/:id', app.oneView.init);

page.start();