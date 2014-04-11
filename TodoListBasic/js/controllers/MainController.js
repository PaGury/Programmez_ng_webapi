todoListApp.controller('MainController', function($scope, TasksService) {
	$scope.tasks = TasksService.getTasks();
	$scope.taskTitle = "";

	var addTaskToLocal = function(task) {
		$scope.tasks.push(task);
	};

	$scope.addTask = function() {
		if(!$scope.taskTitle)
			return;

		TasksService.addTask({
			isDone: false,
			title: $scope.taskTitle
		}, addTaskToLocal);
	};

	$scope.removeTask = function(index) {
		$scope.tasks.splice(index, 1);
	};
});