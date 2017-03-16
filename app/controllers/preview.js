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

    $scope.markdownSize = {
      width: 500,
      height: 300
    }

    $scope.events = [];
    $scope.$on("angular-resizable.resizeEnd", function (event, args) {
			$scope.events.unshift(event)

			if(args.width)
				$scope.markdownSize.width = args.width
			if(args.height)
				$scope.markdownSize.height = args.height
    })

    $scope.back = function() {
      $location.path('/')
    }

    $scope.save = function() {
      domtoimage.toBlob(
        document.getElementById('md-content'),
        {
          bgcolor: '#FFFFFF',
          height: $scope.markdownSize.height,
          width: $scope.markdownSize.width
        })
        .then(function (blob) {
          window.saveAs(blob, 'md-content.png')
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    }
  }])
