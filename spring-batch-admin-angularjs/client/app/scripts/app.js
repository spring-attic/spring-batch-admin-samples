'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('batchAdmin', [
    'ui.router',
    'ngTable',
    'services.config',
    'angular-growl',
    'angularFileUpload',
    'jsonFormatter'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, growlProvider) {

    growlProvider.globalTimeToLive(5000);

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('jobSummary', {
        url: '/jobSummary?jobname',
        templateUrl: 'views/jobSummary.html',
        controller: 'JobSummaryCtrl'
      })
      .state('jobExecution', {
        url: '/jobExecution?jobName&jobInstanceId',
        templateUrl: 'views/jobExecutions.html',
        controller: 'JobExecutionsCtrl'
      })
      .state('jobExecutionDetail', {
        url: '/jobExecutionDetail?executionId',
        templateUrl: 'views/jobExecutionDetail.html',
        controller: 'JobExecutionDetailCtrl'
      })
      .state('stepExecutionDetail', {
        url: '/stepExecutionDetail?jobExecutionId&stepExecutionId',
        templateUrl: 'views/stepExecutionDetail.html',
        controller: 'StepExecutionDetailCtrl'
      })
      .state('fileUpload', {
        url: '/fileUpload',
        templateUrl: 'views/fileUpload.html',
        controller: 'FileUploadCtrl'
      });
  })
    .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    });
