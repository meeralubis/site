(function() {
  (function() {
    'use strict';
    return angular.module('myApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.router', 'ngYoutubeEmbed', 'timer'])
      .run(function($rootScope, $state, $document, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function() {
          $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        });
      });
  })();

}).call(this);
