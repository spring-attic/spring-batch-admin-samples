'use strict';

angular.module('batchAdmin')
  .factory('jobService', ['$http', function($http) {

    function getBatchConfigurations(page, size) {
      return $http.get('/batch/configurations?page=' + page + '&size=' + size);
    }

    return {getBatchConfigurations: getBatchConfigurations};

}]);
