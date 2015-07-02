'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the home page
 */
angular.module('batchAdmin')
  .controller('MainCtrl', ['$scope', 'ngTableParams', 'jobService', function ($scope, ngTableParams, jobService) {
    $scope.tableParams = new ngTableParams({
      page: 0,            // show first page
      count: 10           // count per page
    }, {
      getData: function ($defer, params) {
        jobService.getBatchConfigurations(params.page() - 1, params.count()).then(function (response) {
          params.total(response.data.pagedResources.page.totalElements);
          $defer.resolve(response.data.pagedResources.content);
        });
      }
    });
  }]);
