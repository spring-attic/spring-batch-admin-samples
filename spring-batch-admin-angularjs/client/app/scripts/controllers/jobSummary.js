'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('JobSummaryCtrl', ['$scope', 'ngTableParams', 'jobService', '$stateParams', function ($scope, ngTableParams, jobService, $stateParams) {
    $scope.jobName = $stateParams.jobname;

    $scope.tableParams = new ngTableParams({
      page: 0,            // show first page
      count: 10           // count per page
    }, {
      getData: function ($defer, params) {
        jobService.getJobInstances($stateParams.jobname, params.page() - 1, params.count()).then(function (response) {
          params.total(response.data.pagedResources.page.totalElements);
          $defer.resolve(response.data.pagedResources.content);
        });
      }
    });

    $scope.launch = function(launchRequest) {
      var jobParameters = '';

      if(launchRequest) {
        jobParameters = launchRequest.jobParameters;
      }

      jobService.launchJob($scope.jobName, jobParameters);
    };
  }]);
