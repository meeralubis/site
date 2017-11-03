(function() {
  (function() {
    'use strict';
    var Config;
    Config = null;
    Config = function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html'
      }).state('microsite', {
        url: '/:slug',
        templateUrl: 'data.html',
        controller: 'MainController as vm',
        resolve: {
          CompanyData: function(DataService, $stateParams) {
            return DataService.getData($stateParams.slug);
          }
        }
      });
      $urlRouterProvider.otherwise(function($injector) {
        var $state;
        $state = $injector.get('$state');
        $state.go('home');
      });
    };
    return angular.module('microApp').config(Config);
  })();

}).call(this);
