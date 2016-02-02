'use strict';

angular.module('codefacApp.auth', [
  'codefacApp.constants',
  'codefacApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
