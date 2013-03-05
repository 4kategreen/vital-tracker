'use strict';
Parse.initialize('0S7MAOMdSUPRcKolXs3BNPV4asdO4dnS7elfK53C','r3EqOgzYMfVz5wQAPAsNL8nDGp8BwSkLjmR8PMsE');
var Vitals = Parse.Object.extend('vitals');

/* Controllers */
function VitalsCtrl($scope,$routeParams) {

	function getVitals() {
		var vitals = new Parse.Query(Vitals);
		vitals.ascending('date');
		vitals.limit(14);
	  vitals.find({
	    success: function(results) {
	      $scope.$apply(function() {
	      	$scope.vitals = results.map(function(obj) {
	      		return {
	      			id: obj.id,
	      			weight: obj.get('weight'),
	      			fat: obj.get('fat'),
	      			date: parseDate(obj.get('date')),
	      			rhr: obj.get('rhr')
	      		}
	      	});
	      });
	    },
	    error: function(error) {
	      console.log("Error: " + error.code + " " + error.message);
	    }
	  });
	}
	$scope.vitals = new Object();
	getVitals();

	$scope.title = "Vitals Tracker";

	$scope.addVital = function(v) {
		console.log(v);exit;
    var vital = new Vitals();
    vital.save({
    	date: v.date,
      weight: v.weight,
      fat: v.fat,
      rhr: v.rhr
    }, {
      success: function() {
        $scope.$apply(function() {
          v.date = '';
          v.weight = '';
          v.fat = '';
          v.rhr = '';
        });
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  };

  //VitalsCtrl.$inject = ['$scope', '$routeParams'];
}

function VitalEditCtrl($scope, $routeParams) {
	$scope.id = $routeParams.vitalId;

	var vital = new Parse.Query(Vitals);
	vital.get($scope.id, {
		success: function(results) {
			$scope.$apply(function() {
					$scope.fat = results.get('fat');
					$scope.weight = results.get('weight');
					$scope.rhr = results.get('rhr');
					$scope.date = parseDate(results.get('date'))
	      });
		},
		error: function(error) {
	      console.log("Error: " + error.code + " " + error.message);
	    }
	});
}

function parseDate(d) {
	var date = new Date(d);
	return ((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());
}