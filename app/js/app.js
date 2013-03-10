'use strict';


// Declare app level module which depends on filters, and services
angular.module('vitals', ['vitals.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/', {templateUrl: 'app/partials/summary.html', controller: VitalsCtrl}).
    	when('/graph', {templateUrl: 'app/partials/graph.html'}).
    	when('/vital/:vitalId', {templateUrl: 'app/partials/vital.html', controller: VitalEditCtrl}).
    	otherwise({redirectTo: '/'});
  }]);