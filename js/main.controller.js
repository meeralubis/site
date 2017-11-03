(function() {
  (function() {
    'use strict';
    var MainController;
    MainController = null;

    MainController = function(CompanyData) {
      var init, vm;
      vm = this;
      init = function() {
        vm.data = CompanyData;
        vm.today = new Date();
        vm.currentIndex = 0;
        vm.myInterval = 3000;


        vm.setCurrentSlideIndex = function(index) {
          vm.currentIndex = index;
        };
        vm.isCurrentSlideIndex = function(index) {
          return vm.currentIndex === index;
        };
      };
      init();
    };
    return angular.module('microApp').controller('MainController', MainController);
  })();

}).call(this);
