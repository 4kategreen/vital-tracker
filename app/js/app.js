'use strict';


// Declare app level module which depends on filters, and services
angular.module('vitals', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    	when('/', {templateUrl: 'app/partials/summary.html', controller: VitalsCtrl}).
    	when('/graph', {templateUrl: 'app/partials/graph.html'}).
    	otherwise({redirectTo: '/'});
  }]);


angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);