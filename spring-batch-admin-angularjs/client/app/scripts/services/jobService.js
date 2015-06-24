'use strict';

angular.module('batchAdmin')
  .factory('jobService', ['$http', 'configuration', 'growl', function($http, configuration, growl) {

    function getBatchConfigurations(page, size) {
      return $http.get(configuration.baseUrl + '/batch/configurations', {
        params: {
          page: page,
          size: size
        }
      });
    }

    function getJobInstances(jobname, page, size) {
      return $http.get(configuration.baseUrl + '/batch/instances', {
        params: {
          page: page,
          size: size,
          jobname: jobname
        }
      });
    }

    function launchJob(jobName, jobParameters) {
      var data = 'jobname=' + jobName + '&jobParameters=' + jobParameters;

      $http.post(configuration.baseUrl + '/batch/executions', data)
        .success(function() {
          growl.success('Job ' + jobName + ' launched.');
        })
        .error(function() {
          console.log('there was an error');
        });
    }

    return {getBatchConfigurations: getBatchConfigurations, getJobInstances: getJobInstances, launchJob: launchJob};

}]);
