//'use strict';
//
//angular.module('batchAdmin')
//  .filter('moment', 'executionDuration', function(moment) {
//  return function(input) {
//    console.log(input);
//
//    var ms = moment(input.endTime,'DD/MM/YYYY HH:mm:ss').diff(moment(input.startTime,'DD/MM/YYYY HH:mm:ss'));
//    var d = moment.duration(ms);
//    return Math.floor(d.asHours()) + moment.utc(ms).format(':mm:ss');
//  };
//});
