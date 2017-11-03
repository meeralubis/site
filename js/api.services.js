(function() {
  (function() {
    'use strict';
    var DataService;
    DataService = null;
    DataService = function($http) {
      return {
        getData: function(companySlug) {
          return $http.get("https://app.hackertrail.com/api/microsites/" + companySlug).then(function(response) {
            return response.data;
          });
        }
      };
    };
    return angular.module('microApp').factory('DataService', DataService);
  })();

}).call(this);
