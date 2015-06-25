'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:JobExecutionDetailCtrl
 * @description
 * # StepExecutionDetailCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('StepExecutionDetailCtrl', ['$stateParams', '$scope', 'jobService', function ($stateParams, $scope, jobService) {
    jobService.getStepExecutionInfo($stateParams.jobExecutionId, $stateParams.stepExecutionId).then(function (response) {
      console.log(response.data.stepExecutionInfoResource);
      $scope.stepExecutionDetails = response.data.stepExecutionInfoResource;
    });
  }]);
