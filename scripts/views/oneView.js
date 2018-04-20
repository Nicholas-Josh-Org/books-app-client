var app = app || {};

(function(module){

  const oneView = {};
  oneView.init = function() {
    // app.Book.fetchOne();
    $('.book-list').hide();
    $('.detail-view').show();
    console.log('oneView');
    // app.oneView.toHtml = function() {
    //   let template = Handlebars.compile($('#detail-template').text());
    //   console.log('handled 2');
    //   return template(this);
    // };
    module.Book.all.map(book => $('.detail-view').append(book.toHtml()));
  };

 

  module.oneView = oneView;

}(app));

$(function() {
  app.Book.fetchOne(app.oneView.init);
});

