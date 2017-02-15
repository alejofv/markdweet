'use strict';

/**
 * @ngdoc function
 * @name markdweet-app.controller:main-controller
 * @description
 * # main-controller
 * Controller of the markdweet-app
 */
angular.module('markdweet-app')
  .controller('main-controller', ['$scope', function ($scope) {
    $scope.markdown = ''

    $scope.updateCount = function() {
      $scope.charCount = ($scope.markdown || '').length 
    }

    $scope.clear = function() {
      $scope.markdown = '' 
      $scope.updateCount()
    }

    $scope.updateCount();
  }]);
