'use strict';

/**
 * @ngdoc function
 * @name markdweet-app.controller:preview-controller
 * @description
 * # preview-controller
 * Controller of the markdweet-app
 */
angular.module('markdweet-app')
  .controller('preview-controller', ['$scope', '$location', 'containerService', function ($scope, $location, containerService) {
    $scope.markdown = containerService.getContent()
    $scope.styles = [
      'splendor',
      'air'
    ]

    $scope.selectedStyle = 'splendor'

    $scope.size = {
      width: 600,
      height: 400
    }

    $scope.back = function() {
      $location.path('/')
    }

    $scope.save = function() {
      domtoimage.toBlob(
        document.getElementById('md-content'),
        {
          bgcolor: '#FFFFFF',
          height: $scope.size.height,
          width: $scope.size.width
        })
        .then(function (blob) {
          window.saveAs(blob, 'md-content.png')
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    }
  }])
