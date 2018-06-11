'use strict';

// Declare app level module which depends on views, and components
angular.module('CalculatorApp', [
    'ngRoute',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}])


    .controller('calciCtrl', ['$scope', function ($scope) {

    }]);
