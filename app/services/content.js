'use strict';

/**
 * @ngdoc function
 * @name markdweet-app.service:containerService
 * @description
 * # containerService
 * Service of the markdweet-app
 */
angular.module('markdweet-app')
    .factory('containerService', function() {
        let data = {
            content: ''
        }

        return {
            getContent: function() {
                return data.content
            },
            setContent: function(s) {
                data.content = s
            }
        }
    })