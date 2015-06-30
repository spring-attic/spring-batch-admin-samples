'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('FileUploadCtrl', ['$scope', '$timeout', 'configuration', 'Upload', function ($scope, $timeout, configuration, Upload) {

    $scope.uploadPic = function(files) {
      $scope.formUpload = true;
      console.info(files);
      if (files) {
        upload(files[0]);
      }
    };

    function upload(file) {
      $scope.errorMsg = null;
      uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {
      file.upload = Upload.upload({
        url: configuration.baseUrl + '/files',
        headers: {
          'Content-Type': file.type
        },
        fields: {path: $scope.path},
        file: file,
        fileFormDataName: 'file'
      });

      file.upload.then(function (response) {
        $timeout(function () {
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0) {
          $scope.errorMsg = response.status + ': ' + response.data;
        }
      });

      file.upload.progress(function (evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }

  }]);
