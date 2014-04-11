todoListApp.service("TasksService", function() {
	var tasks = [];

	this.add = function(task, cb) {
		tasks.push(task);
		cb(task);
	};

	this.remove = function(task, cb) {
		var index = tasks.indexOf(task);
		if(index !== -1) {
			tasks.splice(index, 1);
			cb(true, task);
		}
		else {
			cb(false);
		}
	};

	this.getTasks = function() {
		return tasks;
	};
});