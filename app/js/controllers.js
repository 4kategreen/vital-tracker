'use strict';
Parse.initialize('0S7MAOMdSUPRcKolXs3BNPV4asdO4dnS7elfK53C','r3EqOgzYMfVz5wQAPAsNL8nDGp8BwSkLjmR8PMsE');
var Vitals = Parse.Object.extend('vitals');

/* Controllers */
function VitalsCtrl($scope) {

	function getVitals() {
		var vitals = new Parse.Query(Vitals);
		vitals.ascending('date');
		vitals.limit(14);
	  vitals.find({
	    success: function(results) {
	      $scope.$apply(function() {
	      	$scope.vitals = results.map(function(obj) {
	      		return {
	      			id: obj.get('objectId'),
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
	}
	getVitals();

 	//VitalsCtrl.$inject = ['$scope', '$routeParams'];
}

$scope.addTodo = function() {
    var todo = new Todo();
    todo.save({
      text: $scope.todoText,
      done: false
    }, {
      success: function(todoAgain) {
        $scope.$apply(function() {
          $scope.todos.push({text: todoAgain.get("text"), done: todoAgain.get("done"), parseObject: todoAgain});
          $scope.todoText = "";
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };