//---------------ROUTES--------------//
var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'app': 'appView',
    'project': 'projectView',
    'results': 'resultsView',
  }
});

var router = new Router();


router.on('route:home', function(){
  homeView.render();
});

router.on('route:appView', function(){
  appView.render();
});

router.on('route:projectView', function(){
  aboutProjectView.render();
});

router.on('route:resultsView', function(){
  resultsView.render();
});
