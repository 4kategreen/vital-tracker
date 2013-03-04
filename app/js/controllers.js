'use strict';
Parse.initialize('0S7MAOMdSUPRcKolXs3BNPV4asdO4dnS7elfK53C','r3EqOgzYMfVz5wQAPAsNL8nDGp8BwSkLjmR8PMsE');
var Vitals = Parse.Object.extend('vitals');

/* Controllers */
function VitalsCtrl($scope,$routeParams) {

	function getVitals() {
		var vitals = new Parse.Query(Vitals);
		vitals.descending('date');
    vitals.greaterThan("date",getRecent());
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

	$scope.addVital = function() {
    var vital = new Vitals();
    vital.save({
    	date: $scope.date,
      weight: $scope.weight,
      fat: $scope.fat,
      rhr: $scope.rhr
    }, {
      success: function(todoAgain) {
        $scope.$apply(function() {
          $scope.date = '';
          $scope.weight = '';
          $scope.fat = '';
          $scope.rhr = '';
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
  var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
	var date = new Date(d);
	return (days[date.getDay()] + ' ' + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());
}
function getRecent() {
  var date = new Date();
  var dayOfWeek = date.getDay();
  var dayOfMonth = date.getDate();
  // send 7 results if today is Sunday, otherwise getDay() returns correct number
  var daysBetween = 7 + (dayOfWeek == 0 ? 7 : dayOfWeek);
  return new Date(date.setDate(dayOfMonth - daysBetween));
}