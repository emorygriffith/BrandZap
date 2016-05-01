//---------------VIEWS--------------//
var HomeView = Backbone.View.extend({
  el: '.app',
  render: function(){
    var template = _.template($('#home-template').html());
    this.$el.html(template);
  },
  error: function(){
    alert('error rendering view');
  }
});
var homeView = new HomeView();






var AppView = Backbone.View.extend({
  el: '.app',
  render: function(){
    var template = _.template($('#app-template').html());
    this.$el.html(template);
  },
  error: function(){
    alert('error rendering view');
  }
});
var appView = new AppView();





var AboutProjectView = Backbone.View.extend({
  el: '.app',
  render: function(){
    var template = _.template($('#about-project-template').html());
    this.$el.html(template);
  },
  error: function(){
    alert('error rendering view');
  }
});
var aboutProjectView = new AboutProjectView();





var AboutTeamView = Backbone.View.extend({
  el: '.app',
  render: function(){
    var template = _.template($('#about-team-template').html());
    this.$el.html(template);
  },
  error: function(){
    alert('error rendering view');
  }
});
var aboutTeamView = new AboutTeamView();





var ResultsView = Backbone.View.extend({
  el: '.app',
  render: function(){
    var template = _.template($('#results-template').html());
    this.$el.html(template);
  },
  error: function(){
    alert('error rendering view');
  }
});
var resultsView = new ResultsView();
