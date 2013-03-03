'use strict';
Parse.initialize('0S7MAOMdSUPRcKolXs3BNPV4asdO4dnS7elfK53C','r3EqOgzYMfVz5wQAPAsNL8nDGp8BwSkLjmR8PMsE');
var Vitals = Parse.Object.extend('vitals');

/* Controllers */
function VitalsCtrl($scope) {

	function getVitals() {
		var vitals = new Parse.Query(Vitals);
		vitals.ascending('date');
	  vitals.find({
	    success: function(results) {
	      $scope.$apply(function() {
	      	$scope.vitals = results.map(function(obj) {
	      		return {
	      			weight: obj.get('weight'),
	      			fat: obj.get('fat'),
	      			date: parseDate(obj.get('date')),
	      			rhr: obj.get('rhr')
	      		}
	      	});
	      });
	    },
	    error: function(error) {
	      console.log(error);
	    }
	  });
	}
	function parseDate(d) {
		var date = new Date(d);
		return ((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());

		//{"__type":"Date","iso":"2013-03-01T20:26:00.000Z"}
	}
	getVitals();
	$scope.title = 'Vitals';
}