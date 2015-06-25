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
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    //'ngRoute'
    //'ngSanitize',
    //'ngTouch',
    'ui.router',
    'ngTable',
    'services.config',
    'angular-growl'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, growlProvider) {
    console.log('establishing routes');

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
      });
  })
    .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    });
