'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:JobExecutionDetailCtrl
 * @description
 * # JobExecutionDetailCtrl
 * Controller of job execution detail page's functionality
 */
angular.module('batchAdmin')
  .controller('JobExecutionDetailCtrl', ['$stateParams', '$scope', 'jobService', function ($stateParams, $scope, jobService) {
    jobService.getJobExecutionInfo($stateParams.executionId).then(function (response) {
      $scope.jobExecutionDetails = response.data.jobExecutionInfoResource;
    });

    $scope.restartJob = function () {
      jobService.restartJob($stateParams.executionId);
    };

  }]);
