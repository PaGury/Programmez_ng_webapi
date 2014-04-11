todoListApp.service("tasksService", function() {
	var tasks = [];

	this.add = function(task) {
		tasks.push(task);
	};

	this.remove = function(index) {
		tasks.splice(index, 1);
	};

	this.getTasks = function() {
		return tasks;
	};
});