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
      };
      init();

      vm.selectJob = function(job) {
        vm.selectedJob = job
      };
    };


    return angular.module('microApp').controller('MainController', MainController);
  })();

}).call(this);
