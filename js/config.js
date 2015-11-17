let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('./');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.addContact', {
      url: '/add',
      controller: 'ContactsAddController as vm',
      templateUrl: 'templates/contacts-add.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;