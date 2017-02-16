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

    $scope.back = function() {
      containerService.setContent('')
      $location.path('/');
    }
  }]);
