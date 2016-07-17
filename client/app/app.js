'use strict';

angular.module('sfdemoangularApp', ['sfdemoangularApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
