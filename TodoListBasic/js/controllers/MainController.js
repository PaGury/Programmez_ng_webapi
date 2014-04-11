todoListApp.controller('MainController', function($scope) {
	$scope.tasks = [];
	$scope.taskTitle = "";

	$scope.addTask = function() {
		if(!$scope.taskTitle)
			return;

		$scope.tasks.push({
			isDone: false,
			title: $scope.taskTitle
		});
	};
	$scope.removeTask = function(index) {
		$scope.tasks.splice(index, 1);
	};
});