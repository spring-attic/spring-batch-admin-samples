'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:JobExecutionsCtrl
 * @description
 * # JobExecutionsCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('JobExecutionsCtrl', ['$stateParams', '$scope', 'ngTableParams', 'jobService', function ($stateParams, $scope, ngTableParams, jobService) {

    $scope.tableParams = new ngTableParams({
      page: 0,            // show first page
      count: 10           // count per page
    }, {
      getData: function ($defer, params) {
        if($stateParams.jobInstanceId) {
          jobService.getJobExecutionsForInstance($stateParams.jobName, $stateParams.jobInstanceId).then(function (response) {
            params.total(response.data.jobExecutionInfoResourceList.length);
            $defer.resolve(response.data.jobExecutionInfoResourceList);
          });
        } else {
          jobService.getJobExecutions($stateParams.jobName, params.page() - 1, params.count()).then(function (response) {
            params.total(response.data.pagedResources.page.totalElements);
            $defer.resolve(response.data.pagedResources.content);
          });
        }
      }
    });

    $scope.stopAll = function() {
      jobService.stopAll();
    };
  }]);
