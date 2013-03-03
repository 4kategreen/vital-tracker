'use strict';


// Declare app level module which depends on filters, and services
angular.module('vitals', ['vitals.filters', 'vitals.services', 'vitals.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/graph', {templateUrl: 'partials/graph.html'}).
    	otherwise({redirectTo: '/', controller:VitalsCtrl});
  }]);


angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);