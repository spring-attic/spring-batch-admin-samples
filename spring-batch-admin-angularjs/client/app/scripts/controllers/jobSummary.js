'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('JobSummaryCtrl', ['$rootScope', '$scope', 'ngTableParams', 'jobService', '$stateParams', function ($rootScope, $scope, ngTableParams, jobService, $stateParams) {
    $rootScope.$state = 'home';
    console.log($stateParams);
    $scope.jobName = $stateParams.jobname;

    $scope.tableParams = new ngTableParams({
      page: 0,            // show first page
      count: 10           // count per page
    }, {
      getData: function ($defer, params) {
        jobService.getJobInstances($stateParams.jobname, params.page(), params.count()).then(function (response) {
          console.log(response.data);
          $defer.resolve(response.data.pagedResources.content);
        });
      }
    });

    $scope.launch = function(launchRequest) {
      console.log(launchRequest);
      var jobParameters = '';

      if(launchRequest) {
        jobParameters = launchRequest.jobParameters;
      }

      jobService.launchJob($scope.jobName, jobParameters);
    };
  }]);
