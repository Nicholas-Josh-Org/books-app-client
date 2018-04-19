var app = app || {};

(function(module){

  const oneView = {};
  oneView.init = function() {
    $('.container').hide();
    $('.book-list').show();
    app.Book.fetchOne();
    console.log('stuffs');
  };

  module.oneView = oneView;

}(app));