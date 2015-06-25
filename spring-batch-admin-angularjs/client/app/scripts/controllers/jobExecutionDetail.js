'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:JobExecutionDetailCtrl
 * @description
 * # JobExecutionDetailCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('JobExecutionDetailCtrl', ['$stateParams', '$scope', 'jobService', function ($stateParams, $scope, jobService) {
    jobService.getJobExecutionInfo($stateParams.executionId).then(function (response) {
      console.log(response.data.jobExecutionInfoResource);
      $scope.jobExecutionDetails = response.data.jobExecutionInfoResource;
    });
  }]);
