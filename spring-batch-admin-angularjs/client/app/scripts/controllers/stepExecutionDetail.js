'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:JobExecutionDetailCtrl
 * @description
 * # StepExecutionDetailCtrl
 * Controller of the step execution detail page
 */
angular.module('batchAdmin')
  .controller('StepExecutionDetailCtrl', ['$stateParams', '$scope', 'jobService', function ($stateParams, $scope, jobService) {
    jobService.getStepExecutionInfo($stateParams.jobExecutionId, $stateParams.stepExecutionId).then(function (response) {
      $scope.stepExecutionDetails = response.data.stepExecutionInfoResource;
    });
  }]);
