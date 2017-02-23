'use strict';

/**
 * @ngdoc overview
 * @name markdweet-app
 * @description
 * # markdweet-app
 *
 * Main module of the application.
 */
angular
  .module('markdweet-app', [
    'ngRoute',
    'btford.markdown',
    'angularResizable'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider
      .when('/', {
        templateUrl: 'content/views/main.html',
        controller: 'main-controller'
      })
      .when('/preview', {
        templateUrl: 'content/views/preview.html',
        controller: 'preview-controller'
      })
      .when('/about', {
        templateUrl: 'content/views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      })
  }])

