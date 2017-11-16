(function() {
  (function() {
    'use strict';
    var timerController;
    timerController = null;

    timerController = function($scope, $http) {
      var init, vm;
      vm = this;
      init = function() {
        $http.get('https://arena.hackertrail.com/api.v2/next_tournament').then(function(response) {
          vm.next_arena_run = response.data.start_date;
          vm.next_arena_group = response.data.group;
          $scope.$broadcast('timer-start');
        });
      };
      init();
    };

    return angular.module('myApp').controller('timerController', timerController);
  })();

}).call(this);
