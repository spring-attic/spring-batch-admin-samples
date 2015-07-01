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
          growl.error('Job ' + jobName + ' was unable to be launched.');
        });
    }

    function getJobExecutions(jobName, page, size) {
      var params = {
        page: page,
        size: size
      };

      if(jobName) {
        params.jobname = jobName;
      }

      return $http.get(configuration.baseUrl + '/batch/executions', {
        params: params
      });
    }

    function getJobExecutionsForInstance(jobName, jobInstanceId) {
      return $http.get(configuration.baseUrl + '/batch/executions', {
        params: {
          jobname: jobName,
          jobinstanceid: jobInstanceId
        }
      });
    }

    function stopAll() {
      $http.put(configuration.baseUrl + '/batch/executions', 'stop=true')
        .success(function() {
          growl.success('All jobs have been requested to stop');
        })
        .error(function() {
          growl.error('There was an error requesting the jobs stop');
        });
    }

    function getJobExecutionInfo(executionId) {
      return $http.get(configuration.baseUrl + '/batch/executions/' + executionId);
    }

    function getStepExecutionInfo(jobExecutionId, stepExecutionId) {
      return $http.get(configuration.baseUrl + '/batch/executions/' + jobExecutionId + '/steps/' + stepExecutionId);
    }

    function getFiles(page, size) {
      return $http.get(configuration.baseUrl + '/batch/files', {
        params: {
          page: page,
          size: size
        }
      });
    }

    function deleteFiles(path) {
      return $http.delete(configuration.baseUrl + '/batch/files', {
        params: {
          path: path
        }
      });
    }

    return {
      getBatchConfigurations: getBatchConfigurations,
      getJobInstances: getJobInstances,
      launchJob: launchJob,
      getJobExecutions: getJobExecutions,
      stopAll: stopAll,
      getJobExecutionInfo: getJobExecutionInfo,
      getStepExecutionInfo: getStepExecutionInfo,
      getJobExecutionsForInstance: getJobExecutionsForInstance,
      getFiles: getFiles,
      deleteFiles: deleteFiles
    };

}]);
