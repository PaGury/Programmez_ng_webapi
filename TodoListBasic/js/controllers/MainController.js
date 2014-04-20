(function () {
    var todoListApp = angular.module('todolist');
    todoListApp.controller('mainController', function ($scope, tasksService) {
        $scope.tasks = tasksService.getTasks();
        $scope.taskTitle = "";

        $scope.addTask = function () {
            if (!$scope.taskTitle)
                return;
            var task = {
                isDone: false,
                title: $scope.taskTitle
            };
            tasksService.add(task);
            $scope.taskTitle = "";
        };

        $scope.removeTask = function (index) {
            tasksService.remove(index);
        };

        $scope.doneTask = function (task) {
            tasksService.done(task);
        };
    });
})();