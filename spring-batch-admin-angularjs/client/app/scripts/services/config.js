'use strict';

angular.module('services.config', [])
  .constant('configuration', {
    // If the app is served via grunt, point to the typical tomcat location.  Otherwise, use relitive URLs
    baseUrl: window.location.href.indexOf('http://localhost:9000') == 0 ? 'http://localhost:8080' : ''
  });
