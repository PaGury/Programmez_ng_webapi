(function () {
    var todoListApp = angular.module('todolist');
    todoListApp.service("tasksService", function () {
        var tasks = [];

        this.add = function (task) {
            tasks.push(task);
        };

        this.remove = function (index) {
            tasks.splice(index, 1);
        };

        this.done = function (task) {
            task.isDone = true;
        };

        this.getTasks = function () {
            return tasks;
        };
    });
})();