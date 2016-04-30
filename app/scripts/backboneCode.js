(function() {

//---------------VIEWS--------------//
var QuestionsView = Backbone.View.extend({
  el: '.app',
  render: function(){
    var template = _.template($('#questions-template').html());
    this.$el.html(template);
  },
  error: function(){
    alert('error rendering view');
  }
});
var questionsView = new QuestionsView();







//---------------ROUTES--------------//
var Router = Backbone.Router.extend({
  routes: {
    '': 'questions',

  }
});

var router = new Router();

router.on('route:questions', function(){
  questionsView.render();
});


//-------Start History------//
Backbone.history.start();

})();
