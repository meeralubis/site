(function() {
  (function() {
    'use strict';
    var Config;
    Config = null;
    Config = function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider.state('home', {
        templateUrl: 'landing/base1.html',
        abstract: true,
      }).state('home.page', {
        url: '/',
        templateUrl: 'landing/home.html',
        controller: 'timerController as vm',
      }).state('home.about', {
        url: '/about',
        templateUrl: 'landing/about.html',
      }).state('home.employer', {
        url: '/employer',
        templateUrl: 'landing/employer.html',
      }).state('microsite', {
        templateUrl: 'site/base2.html',
        abstract: true,
      }).state('microsite.data', {
        url: '/:slug',
        templateUrl: 'site/data.html',
        controller: 'MainController as vm',
        resolve: {
          CompanyData: function(DataService, $stateParams) {
            return DataService.getData($stateParams.slug);
          }
        }
      });
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise(function($injector) {
        var $state;
        $state = $injector.get('$state');
        $state.go('home.page');
      });
    };
    return angular.module('myApp').config(Config);
  })();
})();
