todoListApp.controller('Main', 
	function ($scope, TasksService) {
		$scope.todos = TasksService.getTasks();

		$scope.addTodo = function(title) {
			$scope.todos.push({
				isDone: false,
				title: title
			});
		};
		$scope.removeTodo = function() {

		}
	});