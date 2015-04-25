'use strict';

angular.module('rounderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fight', {
        templateUrl: 'views/fight.html',
        controller: 'FightCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
