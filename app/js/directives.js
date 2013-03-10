'use strict';

/* Directives */

var module = angular.module('vitals.directives', []);
module.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

module.directive('datepicker', function($parse) {
	return function(scope, element, attrs) {
		var ngModel = $parse(attrs.ngModel);
		$(function() {
	    element.datepicker({
	      inline: true,
	      dateFormat: 'mm/dd/yy',
	      onSelect: function (dateText, inst) {
	        scope.$apply(function(scope){
	          ngModel.assign(scope, dateText);
	        });
	     	}
	    });
	  });
   }
});