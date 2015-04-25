'use strict';

angular.module('rounderApp')
  .controller('FightCtrl', function ($scope, $timeout, $interval) {
    
  	// Clock in seconds
  	$scope.clock = 60;

  	$scope.exercise = "Air Squats";

  	$scope.roundCount = 1;
  	$scope.exerciseCount = 1;

  	$scope.minuteCount = 0;

  	$scope.exerciseList = [
  		'Air Squats',
  		'Push Ups',
  		'Burpees',
  		'Side Plank',
  		'Lunges',
  		'Side Lunges',
  		'Superman',
  		'Dumbell Curl',
  		'Dumbell Row',
  		'Dumbell Single Leg Row',
  		'Dumbell Around the World',
  		'Jumping Jacks'
  	]

  	$scope.nextUp = "";

  	/**
  	 * Functions
  	 */

  	var clockInterval;

  	var initClock = function(){
  		console.log("initClock");
	  	clockInterval = $interval(function(){
	  		$scope.clock = $scope.clock - 1;
	  		if($scope.clock == 0){
	  			$scope.exerciseCount++;
	  			if($scope.exerciseCount == 5){
	  				endRound();
	  			}
	  			else{
	  				resetClock();
	  			}
	  		}
	  	}, 100);
	  };

	  var resetClock = function(){
	  	console.log("resetClock");
	  	$interval.cancel(clockInterval);
	  	$scope.exercise = "Transition";
			$scope.comingUp = $scope.exerciseList[Math.floor(Math.random()*$scope.exerciseList.length)];

			// Transition time
			$scope.clock = 7;

			var transitionInterval = $interval(function(){
				console.log("TransitionInt")
				$scope.clock = $scope.clock - 1;
				if($scope.clock == 0){
					$scope.exercise = $scope.comingUp;
					$scope.comingUp = "";
					$scope.clock = 60;
					$interval.cancel(transitionInterval);
					initClock();
				}
			}, 300);
	  }

	  var endRound = function(){
	  	console.log("endRound!");
	  	$interval.cancel(clockInterval);
	  	$scope.exercise = "Round complete!";
	  	$scope.comingUp = "";
	  };

	  resetClock();

  });
