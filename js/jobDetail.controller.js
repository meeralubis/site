// (function() {
//     (function() {
//         'use strict';
//         var jobDetailController;
//         jobDetailController = null;
//
//         jobDetailController = function(CompanyData) {
//           var init, vm, ;
//           vm = this;
//           vm.data = CompanyData;
//           init = function() {
//             viewDetails = function(job) {
//               var jobDetail = $modal.open({
//                   templateUrl: 'jobDetail.html'
//                 },
//                 resolve: {
//                   job: function() {
//                     return selectedJob;
//                   }
//                 }
//               });
//           };
//         };
//         init();
//       };
//       return angular.module('microApp').controller('jobDetailController', jobDetailController);
//     })();
//
// }).call(this);
